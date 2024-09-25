import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {IconsContainer, IconButton} from './styledComponents'

const TextEditorIcons = props => {
  const {
    updateToBoldText,
    updateToItalicText,
    updateToUnderlineText,
    isBold,
    isItalic,
    isUnderline,
  } = props

  return (
    <IconsContainer>
      <li>
        <IconButton
          type="button"
          isActive={isBold}
          data-testid="bold"
          onClick={updateToBoldText}
        >
          <VscBold />
        </IconButton>
      </li>
      <li>
        <IconButton
          type="button"
          isActive={isItalic}
          data-testid="italic"
          onClick={updateToItalicText}
        >
          <GoItalic />
        </IconButton>
      </li>
      <li>
        <IconButton
          type="button"
          isActive={isUnderline}
          data-testid="underline"
          onClick={updateToUnderlineText}
        >
          <AiOutlineUnderline />
        </IconButton>
      </li>
    </IconsContainer>
  )
}

export default TextEditorIcons
