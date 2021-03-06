import React from 'react'
import Radio from '@mui/material/Radio'
import Input from '../UI/Input'
import { ReactComponent as DublicateSvg } from '../../assets/icons/dublicate.svg'
import { ReactComponent as DeleteTestSvg } from '../../assets/icons/deleteTest.svg'
import Container from '../UI/Container'
import Flexer from '../UI/Flexer'
import Variants from './Variants'
import classes from '../../assets/styles/TestFormContent.module.css'
import useDebounce from '../hooks/use-debounce'

export default function TestFormContent({
   data,
   id,
   onChangeState,
   onDuplicate,
   onDelete,
}) {
   const [selectedValue, setSelectedValue] = React.useState('')
   const [checkboxes, setCheckBoxes] = React.useState([])

   const [inputForm, setInputForm] = React.useState({
      ...data,
      variants: [...data.variants],
   })

   const debouncedForm = useDebounce(inputForm, 1000)
   React.useEffect(() => {
      onChangeState((prev) => {
         const newForms = [...prev.forms]
         newForms[id] = debouncedForm
         return { ...prev, forms: newForms }
      })
   }, [debouncedForm])

   React.useEffect(() => {
      const updatedVariants = inputForm.variants.map((variant) => ({
         ...variant,
         isCorrect: false,
      }))
      setInputForm((prev) => ({ ...prev, variants: updatedVariants }))
   }, [inputForm.type])

   React.useEffect(() => {
      const updatedVariants = inputForm.variants.map((variant) => {
         const newVariant = { ...variant }
         if (checkboxes.includes(newVariant.checked)) {
            newVariant.isCorrect = true
            return newVariant
         }
         newVariant.isCorrect = false
         return newVariant
      })
      setInputForm((prev) => {
         return { ...prev, variants: updatedVariants }
      })
   }, [checkboxes])

   const handleCheckboxChange = (event) => {
      const { id } = event.target
      setCheckBoxes((currentParticipants) =>
         currentParticipants.includes(id)
            ? currentParticipants.filter((chbox) => chbox !== id)
            : [...currentParticipants, id]
      )
   }

   const handleRadioChange = (e, index) => {
      setSelectedValue(e.target.value)
      const updatedVariants = inputForm.variants.map((variant) => ({
         ...variant,
         isCorrect: false,
      }))
      updatedVariants[index].isCorrect = true
      setInputForm((prev) => {
         return { ...prev, variants: updatedVariants }
      })
   }

   const handleChange = (index, event) => {
      const newInputs = { ...inputForm }
      newInputs.variants[index].value = event
      setInputForm(newInputs)
   }
   const addForm = () => {
      setInputForm((prev) => ({
         ...prev,
         variants: [
            ...prev.variants,
            {
               value: '',
               id: new Date().toISOString(),
               checked: `${prev.variants.length}`,
               title: `?????????????? ${prev.variants.length + 1}`,
               isCorrect: false,
            },
         ],
      }))
   }

   const addOtherVariant = () => {
      setInputForm((prev) => ({
         ...prev,
         variants: [
            ...prev.variants,
            {
               value: '',
               id: `${prev.variants.length}`,
               title: '????????????...',
               isCorrect: true,
            },
         ],
      }))
   }

   const clearInput = (id) => {
      setInputForm((prev) => ({
         ...prev,
         variants: prev.variants.filter((inp) => inp.id !== id),
      }))
   }

   const handleChangeType = (type) => {
      setInputForm((prev) => ({ ...prev, type }))
   }

   const handleChangeQuestion = (e) => {
      setInputForm((prev) => ({ ...prev, question: e.target.value }))
   }

   return (
      <div className={classes['test-form-wrapper']}>
         <Container width="98%">
            <Flexer justify="space-around" mt="20px" flexWrap="no-wrap">
               <span className={classes.order}>
                  <span>{data.order}</span>
               </span>
               <Input
                  width="60%"
                  placeholder="????????????"
                  value={inputForm.question}
                  onChange={handleChangeQuestion}
               />
               <Radio
                  checked={inputForm.type === 'SINGLE'}
                  onChange={() => handleChangeType('SINGLE')}
               />
               <p>???????? ???? ????????????</p>

               <Radio
                  checked={inputForm.type === 'MULTIPLE'}
                  onChange={() => handleChangeType('MULTIPLE')}
               />
               <p>?????????????????? ???? ????????????</p>
            </Flexer>
            <Variants
               variants={inputForm}
               clearInput={clearInput}
               selectedRadio={selectedValue}
               handleCheckboxChange={handleCheckboxChange}
               handleRadioChange={handleRadioChange}
               handleInputChange={handleChange}
            />
            <Flexer width="95%" justify="space-between" my={1.5}>
               <div>
                  <button
                     type="button"
                     className={classes['add-variant']}
                     onClick={addForm}
                  >
                     ???????????????? ?????????????? <b> ?????? </b>
                  </button>
                  <button
                     type="button"
                     className={classes['add-other-variant']}
                     onClick={addOtherVariant}
                  >
                     ???????????????? ?????????????? ??????????????????
                  </button>
               </div>
               <div>
                  <DublicateSvg
                     style={{ margin: '10px' }}
                     onClick={() => onDuplicate(data)}
                  />

                  <DeleteTestSvg
                     style={{ margin: '10px' }}
                     onClick={() => onDelete(data.id)}
                  />
               </div>
            </Flexer>
         </Container>
      </div>
   )
}
