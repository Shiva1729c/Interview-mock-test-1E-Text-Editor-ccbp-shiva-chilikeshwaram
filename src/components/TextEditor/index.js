import {Component} from 'react'

import {
  TextEditorContainer,
  ResponsiveContainer,
  TextEditorTitleAndImageContainer,
  TextEditorImage,
  TextEditorTitle,
  EditorContainer,
  TextArea,
} from './styledComponents'

import TextEditorIcons from '../TextEditorIcons'

class TextEditor extends Component {
  state = {
    inputText: '',
    isBold: false,
    isItalic: false,
    isUnderline: false,
  }

  updateToBoldText = () => {
    this.setState(prevState => ({
      isBold: !prevState.isBold,
    }))
  }

  updateToItalicText = () => {
    this.setState(prevState => ({
      isItalic: !prevState.isItalic,
    }))
  }

  updateToUnderlineText = () => {
    this.setState(prevState => ({
      isUnderline: !prevState.isUnderline,
    }))
  }

  onChangeInputText = event => {
    this.setState({inputText: event.target.value})
  }

  renderInputText = () => {
    const {inputText, isBold, isItalic, isUnderline} = this.state

    return (
      <TextArea
        rows="4"
        cols="50"
        onChange={this.onChangeInputText}
        value={inputText}
        isBold={isBold}
        isItalic={isItalic}
        isUnderline={isUnderline}
      />
    )
  }

  renderTextEditor = () => {
    const {isBold, isItalic, isUnderline} = this.state
    return (
      <EditorContainer>
        <TextEditorIcons
          updateToBoldText={this.updateToBoldText}
          updateToItalicText={this.updateToItalicText}
          updateToUnderlineText={this.updateToUnderlineText}
          isBold={isBold}
          isItalic={isItalic}
          isUnderline={isUnderline}
        />
        {this.renderInputText()}
      </EditorContainer>
    )
  }

  render() {
    return (
      <TextEditorContainer>
        <ResponsiveContainer>
          <TextEditorTitleAndImageContainer>
            <TextEditorTitle>Text Editor</TextEditorTitle>
            <TextEditorImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </TextEditorTitleAndImageContainer>
          {this.renderTextEditor()}
        </ResponsiveContainer>
      </TextEditorContainer>
    )
  }
}

export default TextEditor
