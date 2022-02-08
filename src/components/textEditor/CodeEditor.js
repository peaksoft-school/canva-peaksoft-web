import { styled, Tooltip } from '@mui/material'
import React from 'react'
import { createEditor } from 'slate'
import { Editable, Slate, withReact } from 'slate-react'
import Flexer from '../UI/Flexer'
import { ReactComponent as Code } from '../../assets/icons/EditorIcons/code.svg'
import { ReactComponent as RemoveIcon } from '../../assets/icons/EditorIcons/removeIcon.svg'

const DefaultElement = ({ attributes, children }) => {
   return (
      <pre {...attributes} style={{ margin: 0 }}>
         <code>{children}</code>
      </pre>
   )
}

const CodeEditor = ({ value, onChange, onRemove }) => {
   const [editor] = React.useState(() => withReact(createEditor()))
   return (
      <Slate editor={editor} value={value} onChange={onChange}>
         <Flexer justify="space-around" my={3}>
            <Tooltip title={<RemoveIcon onClick={onRemove} />}>
               <Code />
            </Tooltip>
            <StyledEditor>
               <Editable
                  renderElement={(values) => <DefaultElement {...values} />}
                  placeholder="введите код"
               />
            </StyledEditor>
         </Flexer>
      </Slate>
   )
}

export default CodeEditor

const StyledEditor = styled('div')(() => ({
   '&': {
      width: '90%',
      fontStyle: 'normal',
      fontSize: '1.2rem',
      border: '1px solid',
      borderRadius: '10px',
      borderColor: 'rgba(0, 0, 0, 0.23)',
      padding: '10px',
   },
   '&:hover': {
      borderWidth: '1px',
      borderColor: 'black',
   },
   '&:focus-within': {
      border: '1px solid',
      borderColor: '#1976d2',
   },
}))
