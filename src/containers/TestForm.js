import React from 'react'
import { DialogActions, SpeedDial as Duplicate, styled } from '@mui/material'
import TestFormContent from '../components/TestForm/TestFormItem'
import Button from '../components/UI/Button'
import classes from '../assets/styles/TestForm.module.css'
import { ReactComponent as Plus } from '../assets/icons/plusIcon.svg'
import Input from '../components/UI/Input'

export default function TestForm() {
   const [testQuestions, setTestQuestions] = React.useState({
      testName: '',
      forms: [
         {
            question: '',
            id: new Date().toISOString(),
            questionPLaceholder: 'Введите название теста',
            order: 0,
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
      ],
   })
   console.log(testQuestions)

   const duplicateHandler = (question) => {
      const variants = question.variants.map((variant, index) => ({
         ...variant,
         id: Math.random().toString(),
         order: index,
      }))
      const duplicate = {
         ...question,
         order: question.order + 1,
         id: new Date().toISOString(),
         variants,
      }
      setTestQuestions((prev) => ({
         ...prev,
         forms: [...prev.forms, duplicate],
      }))
   }

   const deleteHandler = (questionId) => {
      const filteredForms = testQuestions.forms.filter(
         (question) => question.id !== questionId
      )
      setTestQuestions((prev) => ({ ...prev, forms: filteredForms }))
   }
   const blankTestItem = React.useCallback(
      testQuestions.forms.map((question, index) => (
         <TestFormContent
            data={question}
            id={index}
            key={question.id}
            onDuplicate={duplicateHandler}
            onDelete={deleteHandler}
            onChangeState={setTestQuestions}
         />
      )),
      [testQuestions.forms]
   )

   const handleSubmit = (e) => {
      e.preventDefault()
   }

   const duplicateForm = () => {
      const newForm = {
         question: '',
         id: new Date().toISOString(),
         questionPLaceholder: 'Введите название теста',
         order: testQuestions.forms.length,
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
      setTestQuestions((prev) => ({ ...prev, forms: [...prev.forms, newForm] }))
   }

   const handleChangeTestname = (e) => {
      setTestQuestions((prev) => ({
         ...prev,
         testName: e.target.value,
         forms: prev.forms,
      }))
   }
   return (
      <>
         <form className={classes['form-container']} onSubmit={handleSubmit}>
            <div className={classes['form-title-container']}>
               <h3 className={classes['form-title']}>Название теста</h3>
               <Input
                  placeholder="Введите название теста"
                  onChange={handleChangeTestname}
                  value={testQuestions.testName}
               />
            </div>
            <div>{blankTestItem}</div>
            <DialogActions>
               <Button variant="outlined">Отмена</Button>
               <Button type="submit" variant="contained">
                  Сохранить
               </Button>
            </DialogActions>
         </form>
         <StyledDuplicate
            onClick={duplicateForm}
            ariaLabel="duplicate-button"
            icon={<Plus />}
         />
      </>
   )
}

const StyledDuplicate = styled(Duplicate)(() => ({
   '&': {
      position: 'fixed',
      bottom: 60,
      right: 16,
   },
}))
