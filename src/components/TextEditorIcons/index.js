import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import './index.css'

const TextEditorIcons = props => {
  const {
    updateToBoldText,
    updateToItalicText,
    updateToUnderlineText,
    isBold,
    isItalic,
    isUnderline,
  } = props

  const onClickBoldIcon = () => {
    updateToBoldText()
  }

  const onClickItalicIcon = () => {
    updateToItalicText()
  }

  const onClickUnderlineIcon = () => {
    updateToUnderlineText()
  }

  const toggleBoldIconClassName = isBold ? 'active-icon' : ''
  const toggleItalicIconClassName = isItalic ? 'active-icon' : ''
  const toggleUnderlineIconClassName = isUnderline ? 'active-icon' : ''

  return (
    <ul className="icons-container">
      <li>
        <button
          type="button"
          className={`icon-button ${toggleBoldIconClassName}`}
          data-testid="bold"
          onClick={onClickBoldIcon}
        >
          <VscBold />
        </button>
      </li>
      <li>
        <button
          type="button"
          className={`icon-button ${toggleItalicIconClassName}`}
          data-testid="italic"
          onClick={onClickItalicIcon}
        >
          <GoItalic />
        </button>
      </li>
      <li>
        <button
          type="button"
          className={`icon-button ${toggleUnderlineIconClassName}`}
          data-testid="underline"
          onClick={onClickUnderlineIcon}
        >
          <AiOutlineUnderline />
        </button>
      </li>
    </ul>
  )
}
export default TextEditorIcons
