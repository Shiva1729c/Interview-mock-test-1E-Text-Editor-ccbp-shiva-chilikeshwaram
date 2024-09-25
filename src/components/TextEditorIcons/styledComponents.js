import styled from 'styled-components'

export const IconsContainer = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
`

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => (props.isActive ? '#faff00' : '#f1f5f9')};
  cursor: pointer;
  font-size: 24px;
  margin-right: 12px;
  outline: none;
`
