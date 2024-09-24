import {Component} from 'react'
import TextEditorIcons from '../TextEditorIcons'

import './index.css'

class TextEditor extends Component {
  state = {
    inputText: '',
  }

  onChangeInputText = event => {
    this.setState({inputText: event.target.value})
  }

  renderInputText = () => {
    const {inputText} = this.state

    return (
      <textarea
        rows="4"
        cols="50"
        className="text-area"
        onChange={this.onChangeInputText}
        value={inputText}
      />
    )
  }

  renderTextEditor = () => (
    <div className="editor-container">
      <TextEditorIcons />
      {this.renderInputText()}
    </div>
  )

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
