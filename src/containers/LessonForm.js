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

const SwitchEditor = ({ type, value, onRemove, ...props }) => {
   switch (type) {
      case 'editor':
         return <Editor onRemove={onRemove} value={value} {...props} />
      case 'code_editor':
         return <CodeEditor onRemove={onRemove} value={value} {...props} />
      case 'image':
         return <ImageComponent onRemove={onRemove} value={value[0]} />
      case 'file':
         return <FileComponent onRemove={onRemove} value={value[0]} />
      case 'link':
         return <LinkComponent onRemove={onRemove} value={value} {...props} />
      default:
         return console.error('ahahahahahah!!!')
   }
}

export default function LessonForm() {
   const [count, setCount] = React.useState(0)

   const [inputs, setInputs] = React.useState([
      {
         type: 'editor',
         content: [{ type: 'paragraph', children: [{ text: '' }] }],
         order: 0,
      },
   ])

   const onChangeInputs = (id, value) => {
      const newInputs = inputs
      newInputs[id].content = value
      setInputs(newInputs)
   }

   const [linkModal, setLinkModal] = React.useState(false)

   const [linkName, setLinkName] = React.useState('')
   const [linkHref, setLinkHref] = React.useState('')

   const addEditor = (type, value) => {
      // value от файлов типа image, file
      switch (type) {
         case 'EDITOR':
            return setInputs((prev) => [
               ...prev,
               {
                  type: 'editor',
                  content: [{ type: 'paragraph', children: [{ text: '' }] }],
                  order: inputs[inputs.length - 1]?.order + 1 || 0,
               },
            ])
         case 'CODE_EDITOR':
            return setInputs((prev) => [
               ...prev,
               {
                  type: 'code_editor',
                  content: [{ type: 'code', children: [{ text: '' }] }],
                  order: prev[prev.length - 1].order + 1 || 0,
               },
            ])
         case 'IMAGE': {
            const decode = Array.from(value.target.files)
            const src = decode.map((img) => URL.createObjectURL(img))
            return setInputs((prev) => [
               ...prev,
               {
                  type: 'image',
                  content: src,
                  order: prev[prev.length - 1].order + 1 || 0,
               },
            ]) // url
         }
         case 'FILE':
            return setInputs((prev) => [
               ...prev,
               {
                  type: 'file',
                  content: Array.from(value.target.files),
                  order: prev[prev.length - 1].order + 1 || 0,
               },
            ])
         case 'LINK':
            setLinkModal(false)
            return setInputs((prev) => [
               ...prev,
               {
                  type: 'link',
                  content: { text: linkName, href: linkHref },
                  order: prev[prev.length - 1].order + 1 || 0,
               },
            ])
         default:
            return inputs
      }
   }

   const removeEditor = (order) => {
      setCount(count - 1)
      setInputs((prev) => prev.filter((editor) => editor.order !== order))
   }

   const submitchik = (e) => {
      e.preventDefault()
      const editors = inputs.filter(
         (editor) => editor.type === 'editor' || editor.type === 'code_editor'
      )
      const submitData = editors.map((item, index) => {
         const serializedData = item.content.map((item) => serialize(item))
         return { order: index, content: serializedData, type: 'text' }
      })
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
                     setLinkModal={setLinkModal}
                  />
               </Flexer>
            </div>

            <Paper className={classes.editors}>
               {inputs.map((input, id) => (
                  <SwitchEditor
                     key={input.order}
                     type={input.type}
                     value={input.content}
                     onRemove={() => removeEditor(input.order)}
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
