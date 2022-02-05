/* eslint-disable react/no-array-index-key */
import { Box, Paper, Typography, styled, Link } from '@mui/material'
import React from 'react'
import Editor from '../components/TextEditor/Editor'
import Button from '../components/UI/Button'
import Input from '../components/UI/Input'
import { ReactComponent as LinkIcon } from '../assets/icons/EditorIcons/link.svg'
import { ReactComponent as Image } from '../assets/icons/EditorIcons/image.svg'
import { ReactComponent as File } from '../assets/icons/EditorIcons/file.svg'
import Modal from '../components/UI/Modal'
import Flexer from '../components/UI/Flexer'
import CodeEditor from '../components/TextEditor/CodeEditor'
import {
   LessonFormToolbar,
   serialize,
} from '../components/TextEditor/EditorComponents'

const initialLinks = {
   links: [],
   text: '',
   href: '',
}

const linkReducer = (state, action) => {
   switch (action.type) {
      case 'LINK_TEXT':
         return { ...state, text: action.payload }
      case 'LINK_HREF':
         return { ...state, href: action.payload }
      case 'ADD_LINK':
         if (!state.text && !state.href) return state
         return { text: '', href: '', links: [...state.links, action.payload] }
      case 'REMOVE_LINK':
         return {
            ...state,
            links: state.links.filter(
               (item, index) => index !== action.payload
            ),
         }
      default:
         return state
   }
}

export default function LessonForm() {
   const [inputs, setInputs] = React.useState([
      [{ type: 'paragraph', children: [{ text: '' }] }],
   ])

   const onChangeInputs = (id, value) => {
      const newInputs = inputs
      newInputs[id] = value
      setInputs(newInputs)
   }

   const addEditor = () => {
      setInputs((prev) => [
         ...prev,
         [{ type: 'paragraph', children: [{ text: '' }] }],
      ])
   }

   const [count, setCount] = React.useState(0)

   const removeEditor = (id) => {
      setCount(count + 1)
      const updatedEditors = inputs
      updatedEditors.splice(id, 1)
      setInputs(updatedEditors)
   }
   const submitchik = (e) => {
      e.preventDefault()
      const input = inputs[0]
      const serialized = input.map((item) => serialize(item))
      console.log(serialized)
   }

   // links
   const [links, dispatchLink] = React.useReducer(linkReducer, initialLinks)
   const [linkModal, setLinkModal] = React.useState(false)

   const onAddLink = () => {
      dispatchLink({
         type: 'ADD_LINK',
         payload: { text: links.text, href: links.href },
      })
      setLinkModal(false)
   }

   const handleRemoveLink = (id) => {
      dispatchLink({ type: 'REMOVE_LINK', payload: id })
   }

   const handleLinkName = (e) => {
      dispatchLink({ type: 'LINK_TEXT', payload: e.target.value })
   }
   const handleLinkHref = (e) => {
      dispatchLink({ type: 'LINK_HREF', payload: e.target.value })
   }

   // code
   const [codes, setCodes] = React.useState([])

   const addCodeEditor = () => {
      setCodes((prev) => [
         ...prev,
         [{ type: 'code', children: [{ text: '' }] }],
      ])
   }

   const removeCodeEditor = (id) => {
      setCount(count + 1)
      const updatedEditors = codes
      updatedEditors.splice(id, 1)
      setCodes(updatedEditors)
   }

   const onChangeCodeEditor = (id, value) => {
      const newCodeEditors = codes
      newCodeEditors[id] = value
      setCodes(newCodeEditors)
   }

   // file
   const [files, setFiles] = React.useState([])
   const handleSetFile = (e) => {
      setFiles((prev) => [...prev, ...Array.from(e.target.files)])
   }

   const removeFile = (id) => {
      setFiles((prev) => prev.filter((file, index) => index !== id))
   }

   const [images, setImages] = React.useState([])
   const handleSetImage = (e) => {
      const decode = Array.from(e.target.files)
      const src = decode.map((img) => URL.createObjectURL(img))
      setImages((prev) => [...prev, { src }])
   }
   console.log(images)
   const removeImage = (id) => {
      setImages((prev) => prev.filter((file, index) => index !== id))
   }

   return (
      <>
         <Modal
            open={linkModal}
            onClose={() => setLinkModal(false)}
            sx={{ textAlign: 'center' }}
         >
            <Modal.Title>Добавить ссылку</Modal.Title>
            <Modal.Body>
               <Input
                  width="90%"
                  value={links.text}
                  onChange={handleLinkName}
                  placeholder="Отображаемый текст"
               />
               <Input
                  width="90%"
                  value={links.href}
                  onChange={handleLinkHref}
                  placeholder="Вставьте ссылку"
               />
            </Modal.Body>
            <Modal.Footer>
               <Button variant="outlined" onClick={() => setLinkModal(false)}>
                  Отмена
               </Button>
               <Button variant="contained" onClick={onAddLink}>
                  Продолжить
               </Button>
            </Modal.Footer>
         </Modal>
         <StyledForm onSubmit={submitchik} component="form">
            <FixedToolbar>
               <Typography fontSize={18} component="h1" color="blue">
                  Создать задание
               </Typography>
               <Flexer justify="space-between">
                  <Input
                     width="65%"
                     sx={{ background: 'white' }}
                     placeholder="название задания"
                  />
                  <LessonFormToolbar
                     addEditor={addEditor}
                     addCodeEditor={addCodeEditor}
                     setLinkModal={setLinkModal}
                     addFile={handleSetFile}
                     addImage={handleSetImage}
                  />
               </Flexer>
            </FixedToolbar>

            <Paper sx={{ p: 2, borderRadius: 4, mt: '10%', mx: 'auto' }}>
               {inputs.map((input, id) => (
                  <Editor
                     key={id}
                     value={input}
                     onChange={(newValue) => onChangeInputs(id, newValue)}
                     onRemove={() => removeEditor(id)}
                  />
               ))}
               {links.links.map((link, id) => (
                  <Flexer
                     my={1}
                     pl={1.5}
                     py={2}
                     key={link.text}
                     justify="flex-start"
                  >
                     <LinkIcon onClick={() => handleRemoveLink(id)} />
                     <Link
                        pl={1}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                     >
                        {link.text}
                     </Link>
                  </Flexer>
               ))}
               {codes.map((codeEditor, i) => (
                  <CodeEditor
                     key={i}
                     onRemove={() => removeCodeEditor(i)}
                     value={codeEditor}
                     onChange={(value) => onChangeCodeEditor(i, value)}
                  />
               ))}
               {files.map((file, index) => (
                  <Flexer pl={1.5} my={1} py={2} key={file.name}>
                     <File onClick={() => removeFile(index)} />
                     <span style={{ paddingLeft: '8px' }}>{file.name}</span>
                  </Flexer>
               ))}
               {images.map((image, index) => (
                  <Flexer pl={1.5} py={2} key={image.src}>
                     <Image onClick={() => removeImage(index)} />
                     <img
                        src={image.src}
                        style={{
                           paddingLeft: '8px',
                           width: '60%',
                           height: '40%',
                        }}
                        alt="lessonImg"
                     />
                  </Flexer>
               ))}
            </Paper>
            <Box
               sx={{
                  float: 'right',
                  display: 'flex',
                  width: '20vw',
                  justifyContent: 'space-between',
                  p: '20px',
               }}
            >
               <Button variant="outlined" placeholder="Отображаемый текст">
                  Отмена
               </Button>
               <Button
                  variant="contained"
                  type="submit"
                  placeholder="Вставьте ссылку"
               >
                  Сохранить
               </Button>
            </Box>
         </StyledForm>
      </>
   )
}

const StyledForm = styled(Box)(() => ({
   '&': {
      background: 'rgb(251,251,251)',
      width: '95%',
      height: '95vh',
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: '1rem',
      borderRadius: '5px',
   },
}))

const FixedToolbar = styled(Box)(() => ({
   '&': {
      background: 'rgb(251,251,251)',
      padding: 5,
      marginTop: '16px',
      borderRadius: '16px',
      position: 'fixed',
      width: '74%',
      zIndex: 1,
      top: 0,
   },
}))
