import * as React from "react"
import { commands } from "../commands"
import { DumbTerminal } from "../DumbTerminal"
import { isFunction, scrollStdoutToBottom, shouldSubmit, tail } from "../util"

interface ITerminalState {
  command: string
  commandHistory: string[]
  stdout: string[]
  prompt: string
}

const runCommand = (input: string[]) => {
  const trimmedInput = input.map(i => i.trim()).filter(i => !!i)
  const cmd = commands.find(c => c.name === trimmedInput[0])

  if (!cmd || !cmd.handler) {
    return `Command "${trimmedInput.join(" ")}" not recognized`
  }

  if (!isFunction(cmd.handler)) {
    return `Handler for command "${trimmedInput.join(" ")} is not a function`
  }

  return cmd.handler({ commands, args: tail(trimmedInput) })
}

class Terminal extends React.Component<{}, ITerminalState> {
  public state = {
    command: "",
    commandHistory: [],
    stdout: [],
    prompt: " $ "
  }

  get commandWithPrompt() {
    return `${this.state.prompt}${this.state.command}`
  }

  private print = (line: string) =>
    this.setState({
      ...this.state,
      stdout: [...this.state.stdout, line]
    })

  public resetPrompt = () =>
    this.setState({
      ...this.state,
      command: ""
    })

  private async submitCommand() {
    const { command } = this.state

    if (!command) {
      return
    }

    await this.setState({ commandHistory: [...this.state.commandHistory, this.state.command] })
    await this.print(this.commandWithPrompt)
    await this.print(runCommand(this.state.command.split(" ")))
    this.resetPrompt()
    scrollStdoutToBottom()
  }

  private handleKeyDown = (evt: any) => {
    // allow ctrl c and v to work but also dont
    // pass ctrl o and ctrl p (and others) to the browser
    if (evt.ctrlKey && evt.key !== "v" && evt.key !== "c") {
      evt.preventDefault()
    }

    if (shouldSubmit(evt)) {
      this.submitCommand()
    }
  }

  private handleInput = (evt: any) =>
    this.setState({
      ...this.state,
      command: evt.target.value
    })

  public render() {
    const { stdout, command, prompt } = this.state
    const { handleInput, handleKeyDown } = this

    return <DumbTerminal {...{ stdout, command, prompt, handleInput, handleKeyDown }} />
  }
}

export default Terminal
