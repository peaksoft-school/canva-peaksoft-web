import React from 'react'
import { Box, styled, Tooltip } from '@mui/material'
import {
   createEditor,
   Transforms,
   Editor,
   Element as SlateElement,
} from 'slate'
import { withReact, Slate, Editable, useSlate } from 'slate-react'
import { withHistory } from 'slate-history'
import { Toolbar } from './EditorComponents'
import Button from '../UI/Button'
import { ReactComponent as Text } from '../../assets/icons/EditorIcons/Text.svg'
import {
   italic,
   heading,
   bold,
   underline,
   olList,
   liList,
} from '../../assets/icons/EditorIcons/editorIcons'
import Flexer from '../UI/Flexer'

export default function TextEditor({ value, onChange, onRemove }) {
   const renderElement = React.useCallback(
      (props) => <Element {...props} />,
      []
   )
   const renderLeaf = React.useCallback((props) => <Leaf {...props} />, [])
   const editor = React.useMemo(
      () => withHistory(withReact(createEditor())),
      []
   )

   return (
      <Box>
         <Slate editor={editor} value={value} onChange={onChange}>
            <Toolbar>
               <BlockButton
                  format="heading-one"
                  icon={heading}
                  title="Заголовок"
               />
               <MarkButton format="italic" icon={italic} title="Курсив" />
               <MarkButton
                  format="underline"
                  icon={underline}
                  title="Подчеркнутый текст"
               />
               <MarkButton format="bold" icon={bold} title="Жирный текст" />
               <BlockButton
                  format="bulleted-list"
                  icon={olList}
                  title="Нумерованный список"
               />
               <BlockButton
                  format="numbered-list"
                  icon={liList}
                  title="Маркированный список"
               />
            </Toolbar>
            <Flexer justify="space-around" my={3}>
               <Text onClick={onRemove} />
               <StyledEditor>
                  <Editable
                     renderElement={renderElement}
                     renderLeaf={renderLeaf}
                     placeholder="Введите что-нибудь"
                     autoFocus
                  />
               </StyledEditor>
            </Flexer>
         </Slate>
      </Box>
   )
}

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

// TODO: marks
// проверка активны ли стили
const isMarkActive = (editor, format) => {
   const marks = Editor.marks(editor)
   return marks ? marks[format] === true : false
}

// добавляет стили
const toggleMark = (editor, format) => {
   const isActive = isMarkActive(editor, format)
   if (isActive) {
      Editor.removeMark(editor, format)
   } else {
      Editor.addMark(editor, format, true)
   }
}

// кнопка для добавления стилей
const MarkButton = ({ format, icon, title }) => {
   const editor = useSlate()
   // для active класса
   const isActive = isMarkActive(editor, format)
   return (
      <Tooltip title={title} placement="top">
         <span>
            <Button
               sx={{
                  '&:hover': {
                     backgroundColor: isActive ? 'gray' : 'white',
                  },
                  backgroundColor: isActive ? 'gray' : 'white',
                  minWidth: '30px',
                  height: '30px',
               }}
               onMouseDown={(e) => {
                  e.preventDefault()
                  toggleMark(editor, format)
               }}
            >
               <img src={icon} alt="nothing" />
            </Button>
         </span>
      </Tooltip>
   )
}

// TODO: blocks
const LIST_TYPES = ['numbered-list', 'bulleted-list']

const toggleBlock = (editor, format) => {
   const isActive = isBlockActive(editor, format)
   const isList = LIST_TYPES.includes(format)

   Transforms.unwrapNodes(editor, {
      match: (n) =>
         !Editor.isEditor(n) &&
         SlateElement.isElement(n) &&
         LIST_TYPES.includes(n.type),
      split: true,
   })
   let type
   if (isActive) {
      type = 'paragraph'
   } else if (isList) {
      type = 'list-item'
   } else {
      type = format
   }
   const newProperties = {
      type,
      // type: isActive ? 'paragraph' : isList ? 'list-item' : format,
   }
   Transforms.setNodes(editor, newProperties)

   if (!isActive && isList) {
      const block = { type: format, children: [] }
      Transforms.wrapNodes(editor, block)
   }
}

const isBlockActive = (editor, format) => {
   const { selection } = editor
   if (!selection) return false

   const [match] = Array.from(
      Editor.nodes(editor, {
         at: Editor.unhangRange(editor, selection),
         match: (n) =>
            !Editor.isEditor(n) &&
            SlateElement.isElement(n) &&
            n.type === format,
      })
   )

   return !!match
}

const BlockButton = ({ format, icon, title }) => {
   const editor = useSlate()
   const isActive = isBlockActive(editor, format)
   return (
      <Tooltip title={title} placement="top">
         <span>
            <Button
               style={{
                  backgroundColor: isActive ? 'gray' : 'inherit',
                  minWidth: '30px',
                  height: '30px',
               }}
               onMouseDown={(e) => {
                  e.preventDefault()
                  toggleBlock(editor, format)
               }}
            >
               <img src={icon} alt="nothing" />
            </Button>
         </span>
      </Tooltip>
   )
}

const Element = ({ attributes, children, element }) => {
   switch (element.type) {
      case 'numbered-list':
         return <ol {...attributes}>{children}</ol>
      case 'bulleted-list':
         return <ul {...attributes}>{children}</ul>
      case 'heading-one':
         return <h1 {...attributes}>{children}</h1>
      case 'list-item':
         return <li {...attributes}>{children}</li>
      default:
         return <span {...attributes}>{children}</span>
   }
}

const Leaf = ({ attributes, children, leaf }) => {
   let wrapper = children
   if (leaf.bold) wrapper = <strong>{children}</strong>
   if (leaf.italic) wrapper = <em>{children}</em>
   if (leaf.underline) wrapper = <u>{children}</u>
   if (leaf.bold) wrapper = <strong>{children}</strong>

   return <span {...attributes}>{wrapper}</span>
}
