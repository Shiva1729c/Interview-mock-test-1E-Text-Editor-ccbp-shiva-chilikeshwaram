import styled from 'styled-components'

export const TextEditorContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-color: #25262c;
`

export const ResponsiveContainer = styled.div`
  width: 90%;
  display: flex;
  background-color: #1b1c22;
  margin-top: 50px;
  margin-bottom: 50px;
`

export const TextEditorTitleAndImageContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TextEditorImage = styled.img`
  width: 300px;
  margin-top: auto;
  margin-bottom: auto;
`

export const TextEditorTitle = styled.h1`
  font-family: Roboto, sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: #f8fafc;
  margin-top: 30px;
`

export const EditorContainer = styled.div`
  background-color: #25262c;
  width: 50%;
  border-radius: 10px;
  margin: 10px;
  border: 1px solid #334155;
`

export const TextArea = styled.textarea`
  width: 100%;
  height: 83%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background: none;
  outline: none;
  padding-left: 14px;
  padding-top: 14px;
  border: none;
  color: #f1f5f9;
  font-family: Roboto;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.isUnderline ? 'underline' : 'normal')};
`
