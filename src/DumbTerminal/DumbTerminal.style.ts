import styled from "styled-components"

export const Container = styled.div`
  border: 3px solid #309070;
  overflow-y: scroll;
  box-shadow: 0px 3px 13px 2px rgba(0, 0, 0, 0.3);
  padding: 10px;
  width: 800px;
  max-height: 400px;
  min-height: 400px;
  position: relative;
  background-color: black;
`

export const Stdout = styled.pre`
  font-family: "Overpass Mono", monospace;
  color: #7df504;
  margin: 0;
  font-size: 18px;
`
export const Prompt = styled.span`
  font-family: "Overpass Mono", monospace;
  background-color: black;
  user-select: none;
  white-space: pre;
  border: none;
  color: #7df504;
  outline: none;
  font-size: 18px;
`

export const Input = styled.input`
  font-family: "Overpass Mono", monospace;
  background-color: black;
  margin: 0;
  padding: 0;
  user-select: none;
  width: 100%;
  border: none;
  color: #7df504;
  outline: none;
  font-size: 18px;
`

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
