import styled from "styled-components"

const height = 401

export const Container = styled.div`
  background-color: ${props => props.theme.bg};
  box-shadow: 5px 5px 17px 2px rgba(0, 0, 0, 0.3);
  max-height: ${height}px;
  min-height: ${height}px;
  overflow-y: scroll;
  padding: 10px;
  position: relative;
  width: 800px;
`

export const Stdout = styled.pre`
  color: ${props => props.theme.fg};
  font-family: ${props => props.theme.font};
  font-size: ${props => props.theme.fontSize};
  margin: 0;
`
export const Prompt = styled.span`
  background-color: ${props => props.theme.bg};
  border: none;
  color: ${props => props.theme.fg};
  font-family: ${props => props.theme.font};
  font-size: ${props => props.theme.fontSize};
  outline: none;
  user-select: none;
  white-space: pre;
`

export const Input = styled.input`
  background-color: ${props => props.theme.bg};
  border: none;
  color: ${props => props.theme.fg};
  font-family: ${props => props.theme.font};
  font-size: ${props => props.theme.fontSize};
  margin: 0;
  outline: none;
  padding: 0;
  user-select: none;
  width: 100%;
`

export const InputContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`
