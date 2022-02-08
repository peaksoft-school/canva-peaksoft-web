import { Checkbox, InputAdornment, Radio } from '@mui/material'
import React from 'react'
import Flexer from '../UI/Flexer'
import Input from '../UI/Input'
import { ReactComponent as ClearInputSvg } from '../../assets/icons/deleteInput.svg'

export default function Variants({
   variants,
   handleCheckboxChange,
   handleRadioChange,
   handleInputChange,
   selectedRadio,
   clearInput,
}) {
   const SelectComponent = React.useCallback(
      (props) => {
         switch (variants.type) {
            case 'MULTIPLE':
               return (
                  <Checkbox id={props.value} onClick={handleCheckboxChange} />
               )
            case 'SINGLE':
               return <Radio {...props} />
            default:
               return null
         }
      },
      [variants.type]
   )

   return variants.variants.map((input, index) => (
      <Flexer key={input.id} my={1} flexWrap="no-wrap">
         <SelectComponent
            value={input.checked}
            checked={selectedRadio === input.checked}
            onChange={(e) => handleRadioChange(e, index)}
            name="radio-buttons"
            sx={{ visibility: input.checked ? 'visible' : 'hidden' }}
         />

         <Input
            width="95%"
            placeholder={input.title}
            onChange={(e) => handleInputChange(index, e.target.value)}
            value={input.value}
            InputProps={{
               endAdornment: (
                  <InputAdornment position="end">
                     <ClearInputSvg onClick={() => clearInput(input.id)} />
                  </InputAdornment>
               ),
            }}
         />
      </Flexer>
   ))
}
