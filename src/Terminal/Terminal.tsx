import * as React from "react"
import { commands } from "../commands"
import { defaultTheme } from "../defaultTheme"
import { DumbTerminal } from "../DumbTerminal"
import { ICommand } from "../models/Command"
import { scrollStdoutToBottom } from "../util"
import { runCommand } from "./runCommand"

interface ITerminalState {
  command: string
  commandHistory: string[]
  stdout: string[]
  commandsList: ICommand[]
  prompt: string
  historyIdx: number | null
}

class Terminal extends React.Component<{}, ITerminalState> {
  public state = {
    command: "",
    commandsList: commands,
    commandHistory: [],
    stdout: [],
    prompt: " $ ",
    historyIdx: null
  }

  get commandWithPrompt() {
    return `${this.state.prompt}${this.state.command}`
  }

  private async submitCommand() {
    const { command, commandsList, commandHistory } = this.state

    if (!command) {
      return
    }

    await this.setState({ commandHistory: [...commandHistory, command] })
    await this.print(this.commandWithPrompt)
    await this.print(` ${runCommand(command.split(" "), commandsList)}`)
    this.resetPrompt()
    scrollStdoutToBottom()
  }

  private handleKeyDown = (evt: any) => {
    if (evt.key.toUpperCase() === "ENTER") {
      this.submitCommand()
      return
    }

    if (evt.ctrlKey) {
      evt.preventDefault()

      if (evt.key === "l") this.clear()
      if (evt.key === "c") this.resetPrompt()
      if (evt.key === "o") this.submitCommand()
    }

    if (evt.key === "ArrowDown") this.historyNext()
    if (evt.key === "ArrowUp") this.historyPrev()
  }

  private async historyPrev() {
    const historyIdx =
      this.state.historyIdx === null
        ? this.state.commandHistory.length - 1
        : (this.state.historyIdx as any) - 1

    if (historyIdx < 0) return

    this.setState({
      ...this.state,
      historyIdx,
      command: this.state.commandHistory[historyIdx]
    })
  }

  private async historyNext() {
    const historyIdx = this.state.historyIdx === null ? null : (this.state.historyIdx as any) + 1

    if (historyIdx > this.state.commandHistory.length - 1) return

    await this.setState({
      ...this.state,
      historyIdx,
      command: this.state.commandHistory[historyIdx]
    })
  }

  private clear = () =>
    this.setState({
      ...this.state,
      stdout: []
    })

  private print = (line: string) =>
    this.setState({
      ...this.state,
      stdout: [...this.state.stdout, line]
    })

  public resetPrompt = (command: string = "") =>
    this.setState({
      ...this.state,
      command
    })

  private handleChange = (evt: any) =>
    this.setState({
      ...this.state,
      command: evt.target.value
    })

  public render() {
    const { stdout, command, prompt } = this.state
    const { handleChange, handleKeyDown } = this

    return (
      <DumbTerminal
        {...{ stdout, command, prompt, handleChange, handleKeyDown, theme: defaultTheme }}
      />
    )
  }
}

export default Terminal
