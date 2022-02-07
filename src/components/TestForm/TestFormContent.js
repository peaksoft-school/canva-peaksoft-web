import React, { useEffect } from 'react'
import styled from 'styled-components'
import Radio from '@mui/material/Radio'
import { InputAdornment, Box } from '@mui/material'
import Input from '../UI/Input'
import { ReactComponent as DublicateSvg } from '../../assets/icons/dublicate.svg'
import { ReactComponent as DeleteTestSvg } from '../../assets/icons/deleteTest.svg'
import { ReactComponent as ClearInputSvg } from '../../assets/icons/deleteInput.svg'

const StyledForm = styled.div`
   position: absolute;
   width: 1140px;
   left: 0px;
   top: 248px;
   margin-top: 60px;
   background: #ffffff;
   border: 1px solid #d4d4d4;
   box-sizing: border-box;
   border-radius: 10px;
`

const StyledInput = styled(Input)`
   position: absolute;
   height: 42px;
   border: 1px solid #d4d4d4;
   box-sizing: border-box;
   margin: 10px;
`

const StyledText = styled.p`
   font-family: Open Sans;
   font-style: normal;
   font-weight: normal;
   font-size: 14px;
   color: #000000;
`

const StyledDiv = styled.div`
   display: flex;
   justify-content: space-around;
   align-items: center;
`

const TestFormContent = ({ questionData, onDuplicate }) => {
   useEffect(() => {}, [])

   const [selectedValue, setSelectedValue] = React.useState('')
   const [inputForm, setInputForm] = React.useState([
      {
         value: '',
         id: '0',
         checked: '0',
      },
   ])
   const getInputs = () =>
      inputForm.map((input) => (
         <StyledDiv key={input.id}>
            <Radio
               value={input.id}
               checked={selectedValue === input.checked}
               onChange={(e) => setSelectedValue(e.target.value)}
               name="radio-buttons"
               sx={{ visibility: input.checked ? 'visible' : 'hidden' }}
            />

            <StyledInput
               placeholder="Вариант"
               onChange={(e) => handleChange(input.id, e.target.value)}
               value={input.value}
               InputProps={{
                  endAdornment: (
                     <InputAdornment position="end">
                        <ClearInputSvg onClick={() => clearInput(input.id)} />
                     </InputAdornment>
                  ),
               }}
            />
         </StyledDiv>
      ))

   const handleChange = (id, event) => {
      const newInputs = [...inputForm]
      newInputs[id].value = event
      newInputs.checked = selectedValue
      setInputForm(newInputs)
   }

   const addForm = () => {
      setInputForm((prev) => [
         ...prev,
         { value: '', id: `${prev.length}`, checked: `${prev.length}` },
      ])
   }

   const addOtherVariant = () => {
      setInputForm((prev) => [...prev, { value: '', id: `${prev.length}` }])
   }

   const clearInput = (id) => {
      setInputForm((prev) => prev.filter((inp) => inp.id !== id))
   }

   // const duplicateForm = () => {}

   // const deleteForm = (id) => {}

   const submitHandler = (e) => {
      e.preventDefault()
   }

   return (
      <StyledForm onSubmit={submitHandler}>
         <StyledDiv style={{ display: 'flex' }}>
            <h2 style={{ margin: '15px' }}>1</h2>
            <StyledInput placeholder="Вопрос" />
            <div
               style={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '450px',
                  marginTop: '20px',
               }}
            >
               <Radio />
               <StyledText>Один из списка</StyledText>

               <Radio />
               <StyledText>Несколько из списка</StyledText>
            </div>
         </StyledDiv>
         <div>{getInputs()}</div>
         <div style={{ display: 'flex', margin: '15px' }}>
            <Box
               style={{ color: '#7A7A7A', cursor: 'pointer' }}
               onClick={addForm}
            >
               Добавить вариант <b> или </b>
            </Box>
            <Box
               style={{
                  color: '#1F6ED4',
                  display: 'inline',
                  marginLeft: '10px',
                  cursor: 'pointer',
               }}
               onClick={addOtherVariant}
            >
               добавить вариант “Другое”s
            </Box>
            <div>
               <DublicateSvg
                  style={{ margin: '10px' }}
                  onClick={() => onDuplicate(questionData.id)}
               />

               <DeleteTestSvg style={{ margin: '10px' }} />
            </div>
         </div>
      </StyledForm>
   )
}

export default TestFormContent
