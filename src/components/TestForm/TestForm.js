import React from 'react'
import styled from 'styled-components'

import Input from '../UI/Input'
import TestFormContent from './TestFormContent'

const StyledForm = styled.form`
   position: absolute;
   width: 1140px;
   height: 124px;
   left: 0px;
   top: 100px;
   background: #ffffff;
   border: 1px solid #d4d4d4;
   box-sizing: border-box;
   border-radius: 10px;
`

const StyledTitle = styled.h3`
   font-family: Open Sans;
   font-style: normal;
   font-weight: 600;
   font-size: 18px;
   line-height: 22px;
   color: #1f6ed4;
`

const StyledInput = styled(Input)`
   width: 1100px;
   height: 42px;
   border: 1px solid #d4d4d4;
   box-sizing: border-box;
   border-radius: 8px;
`

const TestFormHeader = () => {
   const [testQuestions, setTestQuestions] = React.useState([
      {
         id: new Date().toISOString(),
         title: 'gdysgfjhefj',
         type: 'SINGLE', // | "MULTIPLE"
         variants: [
            {
               id: new Date().toISOString(),
               isCorrect: false,
               title: 'jkdsnhrfureffjkdsjkf',
            },
            {
               id: new Date().toISOString(),
               isCorrect: false,
               title: 'jkderferfersnfjkdsjkf',
            },
            {
               id: new Date().toISOString(),
               isCorrect: true,
               title: 'jkdsnefdewdfewfjkdsjkf',
            },
            {
               id: new Date().toISOString(),
               isCorrect: false,
               title: 'jkdsewdewdewdewdewdnfjkdsjkf',
            },
         ],
      },
   ])

   const duplicateHandler = (questionId) => {
      const foundQuestion = testQuestions.find(
         (question) => question.id === questionId
      )

      setTestQuestions((prevState) => [...prevState, foundQuestion])
   }

   return (
      <StyledForm>
         <div style={{ margin: '20px' }}>
            <StyledTitle>Название теста</StyledTitle>
            <StyledInput placeholder="Введите название теста" />
         </div>

         <div>
            {testQuestions.map((question) => (
               <TestFormContent
                  data={question}
                  key={question.id}
                  onDuplicate={duplicateHandler}
               />
            ))}
         </div>
      </StyledForm>
   )
}

export default TestFormHeader
