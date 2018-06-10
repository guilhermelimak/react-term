import * as React from "react"
import { focusInput } from "../util"
import { Container, Input, InputContainer, Prompt, Stdout } from "./DumbTerminal.style"

interface IDumbTerminalProps {
  stdout: string[]
  command: string
  prompt: string
  handleKeyDown: (evt: any) => void
  handleChange: (evt: any) => void
}

const DumbTerminal = (props: IDumbTerminalProps) => (
  <Container onClick={focusInput} className="terminal__container">
    <Stdout>{props.stdout.map((line, idx) => <div key={idx}>{line}</div>)}</Stdout>
    <InputContainer>
      <Prompt>{props.prompt}</Prompt>
      <Input
        type="text"
        className="terminal__input"
        value={props.command}
        onKeyDown={props.handleKeyDown}
        onChange={props.handleChange}
      />
    </InputContainer>
  </Container>
)

export default DumbTerminal
