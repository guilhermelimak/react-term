import * as React from "react"
import { focusInput } from "../util"
import { Container, Input, InputContainer, Prompt, Stdout } from "./DumbTerminal.style"

interface IDumbTerminalProps {
  stdout: string[]
  command: string
  prompt: string
  handleKeyDown: (evt: any) => void
  handleInput: (evt: any) => void
}

const DumbTerminal = (props: IDumbTerminalProps) => (
  <Container onClick={focusInput}>
    <Stdout className="terminal__stdout">
      {props.stdout.map((line, idx) => <div key={idx}>{line}</div>)}
    </Stdout>
    <InputContainer>
      <Prompt>{props.prompt}</Prompt>
      <Input
        type="text"
        className="terminal__input"
        value={props.command}
        onKeyDown={props.handleKeyDown}
        onChange={props.handleInput}
      />
    </InputContainer>
  </Container>
)

export default DumbTerminal
