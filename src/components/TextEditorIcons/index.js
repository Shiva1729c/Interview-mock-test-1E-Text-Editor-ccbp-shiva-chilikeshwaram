import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import './index.css'

const TextEditorIcons = () => (
  <ul className="icons-container">
    <li>
      <button type="button" className="icon-button" data-testid="bold">
        <VscBold />
      </button>
    </li>
    <li>
      <button type="button" className="icon-button" data-testid="italic">
        <GoItalic />
      </button>
    </li>
    <li>
      <button type="button" className="icon-button" data-testid="underline">
        <AiOutlineUnderline />
      </button>
    </li>
  </ul>
)

export default TextEditorIcons
