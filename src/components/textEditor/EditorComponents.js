import { Link, styled, Tooltip } from '@mui/material'
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
import { ReactComponent as RemoveIcon } from '../../assets/icons/EditorIcons/removeIcon.svg'
import Button from '../UI/Button'

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

export const LessonFormToolbar = ({
   addEditor,
   setLinkModal,
   addFile,
   addCodeEditor,
   addImage,
}) => (
   <Flexer justify="space-around" width="30%">
      <Tooltip title="?????????????????? ????????" placement="top">
         <span>
            <TextIcon onClick={addEditor} />
         </span>
      </Tooltip>
      <Tooltip title="???????????????????? ????????" placement="top">
         <span>
            <Input
               id="file"
               type="file"
               sx={{ display: 'none' }}
               onChange={addFile}
               multiple
            />
            <label htmlFor="file">
               <File />
            </label>
         </span>
      </Tooltip>
      <Tooltip title="???????????????? ????????????????" placement="top">
         <span>
            <Input
               id="image"
               type="file"
               sx={{ display: 'none' }}
               onChange={addImage}
               multiple
            />
            <label htmlFor="image">
               <Image />
            </label>
         </span>
      </Tooltip>
      <Tooltip title="???????????????? ????????????" placement="top">
         <span>
            <LinkIcon onClick={() => setLinkModal(true)} />
         </span>
      </Tooltip>
      <Tooltip title="??????" placement="top">
         <span>
            <Code onClick={addCodeEditor} />
         </span>
      </Tooltip>
   </Flexer>
)

export const LinkComponent = ({ value, onRemove }) => (
   <Flexer my={1} pl={1.5} py={2} key={value.text} justify="flex-start">
      <Tooltip title={<RemoveIcon onClick={onRemove} />}>
         <LinkIcon />
      </Tooltip>
      <Link pl={1} href={value.href} target="_blank" rel="noreferrer">
         {value.text}
      </Link>
   </Flexer>
)

export const FileComponent = ({ value, onRemove }) => (
   <Flexer pl={1.5} my={1} py={2}>
      <Tooltip title={<RemoveIcon onClick={onRemove} />}>
         <File />
      </Tooltip>
      <FileName>{value.name}</FileName>
   </Flexer>
)

const FileName = styled('span')(() => ({
   paddingLeft: '8px',
}))

export const ImageComponent = ({ value, onRemove }) => {
   const [showButton, setShowButton] = React.useState(false)
   return (
      <StyledDiv style={{ position: 'relative' }}>
         <div
            onMouseEnter={() => setShowButton(true)}
            onMouseLeave={() => setShowButton(false)}
         >
            <img src={value} alt="lessonImg" />
            {showButton && <Button onClick={onRemove}>??????????????</Button>}
         </div>
      </StyledDiv>
   )
}

const StyledDiv = styled('div')(() => ({
   position: 'relative',
   '& div': {
      width: '50%',
      height: '50%',
   },
   img: {
      width: '100%',
      height: '100%',
      marginBottom: '-3.5px',
   },
   button: {
      backgroundColor: '#C91E1E',
      position: 'absolute',
      color: '#FFFFFF',
      left: '25%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
   },
   '& div:hover': {
      background: 'rgba(0, 0, 0, 0.8)',
      img: {
         opacity: 0.7,
      },
      button: {
         background: '#C91E1E',
      },
   },
}))
