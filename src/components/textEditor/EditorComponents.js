import { Link, Tooltip } from '@mui/material'
import { Box } from '@mui/system'
import escapeHtml from 'escape-html'
import React from 'react'
import { Text } from 'slate'
import Flexer from '../UI/Flexer'
import Input from '../UI/Input'
import { ReactComponent as Code } from '../../assets/icons/EditorIcons/code.svg'
import { ReactComponent as LinkIcon } from '../../assets/icons/EditorIcons/link.svg'
import { ReactComponent as TextIcon } from '../../assets/icons/EditorIcons/Text.svg'
import { ReactComponent as Image } from '../../assets/icons/EditorIcons/image.svg'
import { ReactComponent as File } from '../../assets/icons/EditorIcons/file.svg'

export const Toolbar = React.forwardRef(
   ({ className, children, ...props }, ref) => (
      <Box
         {...props}
         ref={ref}
         className={className}
         sx={{
            width: '50%',
            display: 'flex',
            justifyContent: 'space-evenly',
            mb: 2,
            ml: 2,
         }}
      >
         {children}
      </Box>
   )
)

// todo get HTML from JSON
export const serialize = (node) => {
   if (Text.isText(node)) {
      let string = escapeHtml(node.text)
      if (node.bold) {
         string = `<strong>${string}</strong>`
      }
      return string
   }
   const children = node.children.map((n) => serialize(n)).join('')
   switch (node.type) {
      case 'quote':
         return `<blockquote><p>${children}</p></blockquote>`
      case 'paragraph':
         return `<p>${children}</p>`
      case 'link':
         return `<a href="${escapeHtml(node.url)}">${children}</a>`
      case 'bulleted-list':
         return `<ol>${children}</ol>`
      case 'list-item':
         return `<li>${children}</li>`
      default:
         return children
   }
}

export const LessonFormToolbar = ({ addEditor, setLinkModal }) => (
   <Flexer justify="space-around" width="30%">
      <Tooltip title="Текстовое поле" placement="top">
         <span>
            <TextIcon onClick={() => addEditor('EDITOR')} />
         </span>
      </Tooltip>
      <Tooltip title="Прикрепить файл" placement="top">
         <span>
            <Input
               id="file"
               type="file"
               sx={{ display: 'none' }}
               onChange={(e) => addEditor('FILE', e)}
               multiple
            />
            <label htmlFor="file">
               <File />
            </label>
         </span>
      </Tooltip>
      <Tooltip title="Добавить картинку" placement="top">
         <span>
            <Input
               id="image"
               type="file"
               sx={{ display: 'none' }}
               onChange={(e) => addEditor('IMAGE', e)}
               multiple
            />
            <label htmlFor="image">
               <Image />
            </label>
         </span>
      </Tooltip>
      <Tooltip title="Вставить ссылку" placement="top">
         <span>
            <LinkIcon onClick={() => setLinkModal(true)} />
         </span>
      </Tooltip>
      <Tooltip title="Код" placement="top">
         <span>
            <Code onClick={() => addEditor('CODE_EDITOR')} />
         </span>
      </Tooltip>
   </Flexer>
)

export const LinkComponent = ({ value, onRemove }) => (
   <Flexer my={1} pl={1.5} py={2} key={value.text} justify="flex-start">
      <LinkIcon onClick={onRemove} />
      <Link pl={1} href={value.href} target="_blank" rel="noreferrer">
         {value.text}
      </Link>
   </Flexer>
)

export const FileComponent = ({ value, onRemove }) => (
   <Flexer pl={1.5} my={1} py={2}>
      <File onClick={onRemove} />
      <span style={{ paddingLeft: '8px' }}>{value.name}</span>
   </Flexer>
)

export const ImageComponent = ({ value, onRemove }) => (
   <Flexer pl={1.5} py={2}>
      <Image onClick={onRemove} value={value} />
      <img
         src={value}
         style={{
            paddingLeft: '8px',
            width: '60%',
            height: '40%',
         }}
         alt="lessonImg"
      />
   </Flexer>
)
