import * as React from "react"
import styled from "styled-components"
import { defaultTheme } from "./defaultTheme"
import { Terminal } from "./Terminal"

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Window = styled.div`
  border: 4px solid ${defaultTheme.border};
`

class App extends React.Component {
  public render() {
    return (
      <AppContainer>
        <Window>
          <Terminal />
        </Window>
      </AppContainer>
    )
  }
}

export default App
