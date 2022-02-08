import React from 'react'
import { DialogActions, SpeedDial } from '@mui/material'
import TestFormContent from '../components/TestForm/TestFormContent'
import Button from '../components/UI/Button'
import classes from '../assets/styles/TestForm.module.css'
import { ReactComponent as Plus } from '../assets/icons/plusIcon.svg'

export default function TestForm() {
   const [testQuestions, setTestQuestions] = React.useState([
      {
         testName: '',
         id: new Date().toISOString(),
         questionPLaceholder: 'Введите название теста',
         order: 1,
         type: 'SINGLE',
         variants: [
            {
               id: new Date().toISOString(),
               isCorrect: false,
               title: `Вариант 1`,
               value: '',
               checked: '0',
            },
         ],
      },
   ])

   const duplicateHandler = (question) => {
      const foundQuestion = {
         ...question,
         order: question.order + 1,
         id: new Date().toISOString(),
         variants: question.variants.map((variant, index) => ({
            ...variant,
            id: Math.random().toString(),
            order: index,
         })),
      }
      setTestQuestions((prevState) => [...prevState, foundQuestion])
   }

   const deleteHandler = (questionId) => {
      setTestQuestions((prev) =>
         prev.filter((question) => question.id !== questionId)
      )
   }

   const testBlank = React.useCallback(
      testQuestions.map((question, index) => (
         <TestFormContent
            data={question}
            id={index}
            key={question.id}
            onDuplicate={duplicateHandler}
            onDelete={deleteHandler}
            onChangeState={setTestQuestions}
         />
      )),
      [testQuestions]
   )

   const handleSubmit = (e) => {
      e.preventDefault()
      console.log(testQuestions)
   }

   const duplicateForm = () => {
      const newForm = {
         testName: '',
         id: new Date().toISOString(),
         questionPLaceholder: 'Введите название теста',
         order: 1,
         type: 'SINGLE',
         variants: [
            {
               id: new Date().toISOString(),
               isCorrect: false,
               title: `Вариант 1`,
               value: '',
               checked: '0',
            },
         ],
      }
      setTestQuestions((prev) => [...prev, newForm])
   }
   return (
      <>
         <form className={classes['form-container']} onSubmit={handleSubmit}>
            <div>{testBlank}</div>
            <DialogActions>
               <Button variant="outlined">Отмена</Button>
               <Button type="submit" variant="contained">
                  Сохранить
               </Button>
            </DialogActions>
         </form>
         <SpeedDial
            onClick={duplicateForm}
            ariaLabel="SpeedDial basic example"
            sx={{
               position: 'fixed',
               bottom: 60,
               right: 16,
            }}
            icon={<Plus />}
         />
      </>
   )
}
