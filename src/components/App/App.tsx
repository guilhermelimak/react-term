import * as React from "react"
import styled from "styled-components"
import { defaultTheme } from "../../defaultTheme"
import { Terminal } from "../Terminal"

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Window = styled.div`
  border: 4px solid ${defaultTheme.border};
`
const Description = styled.pre`
  color: #ccc;
  padding: 40px;
  text-align: center;
  font-weight: 600;
  font-family: ${defaultTheme.font};
  font-size: 15px;
  line-height: 1.7;
`

class App extends React.Component {
  public render() {
    return (
      <AppContainer>
        <Window>
          <Terminal />
        </Window>
        <Description>
          Type help to list commands
          <br />
          Arrow up and down go back and down in history
          <br />
          Ctrl+L clear the terminal screen
          <br />
          Ctrl+O or Enter to submit command
          <br />
          Ctrl+E and Ctrl+A to go to the end and begining of the line
        </Description>
      </AppContainer>
    )
  }
}

export default App
