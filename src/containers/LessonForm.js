/* eslint-disable no-plusplus */
/* eslint-disable no-unsafe-optional-chaining */
import { DialogActions, Paper } from '@mui/material'
import React from 'react'
import Editor from '../components/TextEditor/Editor'
import Button from '../components/UI/Button'
import Input from '../components/UI/Input'
import Modal from '../components/UI/Modal'
import Flexer from '../components/UI/Flexer'
import CodeEditor from '../components/TextEditor/CodeEditor'
import {
   FileComponent,
   ImageComponent,
   LessonFormToolbar,
   LinkComponent,
   serialize,
} from '../components/TextEditor/EditorComponents'
import classes from '../assets/styles/LessonForm.module.css'
import {
   CODE_EDITOR,
   EDITOR,
   FILE,
   IMAGE,
   LINK,
} from '../utils/constants/editorConstants'

const SwitchEditor = ({ type, value, onRemove, ...props }) => {
   switch (type) {
      case EDITOR:
         return <Editor onRemove={onRemove} value={value} {...props} />
      case CODE_EDITOR:
         return <CodeEditor onRemove={onRemove} value={value} {...props} />
      case IMAGE:
         return <ImageComponent onRemove={onRemove} value={value[0]} />
      case FILE:
         return <FileComponent onRemove={onRemove} value={value[0]} />
      case LINK:
         return <LinkComponent onRemove={onRemove} value={value} {...props} />
      default:
         return null
   }
}

const incId = () => {
   let count = 0
   const inc = () => {
      count++
      return count
   }
   return inc
}
const getIncrementedId = incId()

export default function LessonForm() {
   const [inputs, setInputs] = React.useState([
      {
         type: 'editor',
         content: [{ type: 'paragraph', children: [{ text: '' }] }],
         id: 0,
      },
   ])

   const onChangeInputs = (id, value) => {
      const newInputs = [...inputs]
      newInputs[id].content = value
      setInputs(newInputs)
   }

   const [linkModal, setLinkModal] = React.useState(false)
   const [linkName, setLinkName] = React.useState('')
   const [linkHref, setLinkHref] = React.useState('')
   const addEditor = () => {
      setInputs((prev) => [
         ...prev,
         {
            type: EDITOR,
            content: [{ type: 'paragraph', children: [{ text: '' }] }],
            id: getIncrementedId(),
         },
      ])
   }

   const addCodeEditor = () => {
      setInputs((prev) => [
         ...prev,
         {
            type: CODE_EDITOR,
            content: [{ type: 'code', children: [{ text: '' }] }],
            id: getIncrementedId(),
         },
      ])
   }

   const addFile = (value) => {
      setInputs((prev) => [
         ...prev,
         {
            type: FILE,
            content: Array.from(value.target.files),
            id: getIncrementedId(),
         },
      ])
   }

   const addImage = (value) => {
      const decode = Array.from(value.target.files)
      const src = decode.map((img) => URL.createObjectURL(img))
      return setInputs((prev) => [
         ...prev,
         {
            type: IMAGE,
            content: src,
            id: getIncrementedId(),
         },
      ]) // url
   }

   const removeEditor = (id) => {
      setInputs((prev) => prev.filter((editor) => editor.id !== id))
   }

   const submitchik = (e) => {
      e.preventDefault()
      const editors = inputs.filter(
         (editor) => editor.type === EDITOR || editor.type === CODE_EDITOR
      )

      const submitData = editors.map((editorState, index) => {
         const serializedData = editorState.content.map((item) =>
            serialize(item)
         )
         return {
            order: index,
            content: { serialized: serializedData, notSerialized: editorState },
            type: editorState.type,
         }
      })

      const orderedEditors = inputs.map((input, index) => ({
         content: input.content,
         order: index,
         type: input.type,
      }))

      console.log(orderedEditors)
      console.log(submitData)
   }

   return (
      <>
         <Modal open={linkModal} onClose={() => setLinkModal(false)}>
            <Modal.Title>Добавить ссылку</Modal.Title>
            <Modal.Body>
               <Input
                  width="90%"
                  value={linkName}
                  onChange={(e) => setLinkName(e.target.value)}
                  placeholder="Отображаемый текст"
               />
               <Input
                  width="90%"
                  value={linkHref}
                  onChange={(e) => setLinkHref(e.target.value)}
                  placeholder="Вставьте ссылку"
               />
            </Modal.Body>
            <Modal.Footer>
               <DialogActions>
                  <Button
                     variant="outlined"
                     onClick={() => setLinkModal(false)}
                  >
                     Отмена
                  </Button>
                  <Button variant="contained" onClick={() => addEditor('LINK')}>
                     Продолжить
                  </Button>
               </DialogActions>
            </Modal.Footer>
         </Modal>
         <form className={classes['form-wrapper']} onSubmit={submitchik}>
            <div className={classes['fixed-toolbar']}>
               <h1 className={classes.title}>Создать задание</h1>
               <Flexer justify="space-between">
                  <Input
                     width="65%"
                     sx={{ background: 'white' }}
                     placeholder="название задания"
                  />
                  <LessonFormToolbar
                     addEditor={addEditor}
                     addCodeEditor={addCodeEditor}
                     addFile={addFile}
                     addImage={addImage}
                     setLinkModal={setLinkModal}
                  />
               </Flexer>
            </div>

            <Paper className={classes.editors}>
               {inputs.map((input, id) => (
                  <SwitchEditor
                     key={input.id}
                     type={input.type}
                     value={input.content}
                     onRemove={() => removeEditor(input.id)}
                     onChange={(newValue) => onChangeInputs(id, newValue)}
                  />
               ))}
               <DialogActions>
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
               </DialogActions>
            </Paper>
         </form>
      </>
   )
}
