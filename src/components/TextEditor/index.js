import {Component} from 'react'
import TextEditorIcons from '../TextEditorIcons'

import './index.css'

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

    const updateTextFont = isBold ? 'bold-font' : ''
    const updateTextStyle = isItalic ? 'italic-font' : ''
    const updateTextDecoration = isUnderline ? 'underline-font' : ''

    return (
      <textarea
        rows="4"
        cols="50"
        className={`text-area ${updateTextFont} ${updateTextStyle} ${updateTextDecoration}`}
        onChange={this.onChangeInputText}
        value={inputText}
      />
    )
  }

  renderTextEditor = () => {
    const {isBold, isItalic, isUnderline} = this.state
    return (
      <div className="editor-container">
        <TextEditorIcons
          updateToBoldText={this.updateToBoldText}
          updateToItalicText={this.updateToItalicText}
          updateToUnderlineText={this.updateToUnderlineText}
          isBold={isBold}
          isItalic={isItalic}
          isUnderline={isUnderline}
        />
        {this.renderInputText()}
      </div>
    )
  }

  render() {
    return (
      <div className="text-editor-container">
        <div className="responsive-container">
          <div className="text-editor-title-and-image-container">
            <h1 className="text-editor-title">Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
              className="text-editor-image"
            />
          </div>
          {this.renderTextEditor()}
        </div>
      </div>
    )
  }
}

export default TextEditor
