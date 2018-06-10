import * as React from "react"
import styled from "styled-components"
import { Terminal } from "./Terminal"

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`

class App extends React.Component {
  public render() {
    return (
      <AppContainer>
        <Terminal />
      </AppContainer>
    )
  }
}

export default App
