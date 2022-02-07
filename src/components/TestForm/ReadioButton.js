import * as React from 'react'
import Radio from '@mui/material/Radio'

export default function RadioButton() {
   const [selectedValue, setSelectedValue] = React.useState('')
   const [radios, setRadios] = React.useState([
      {
         value: '0',
      },
   ])
   const getRadios = () => {
      return radios.map((radio, id) => (
         <Radio
            key={radio.value}
            checked={selectedValue === radio.value}
            onChange={(e) => handleChange(id, e.target.value)}
            value={radio.value}
            name="radio-buttons"
         />
      ))
   }

   const handleChange = (id, event) => {
      const newRadios = radios
      newRadios[id].value = event
      setRadios(newRadios)
      setSelectedValue(event)
   }

   const addRadio = () => {
      setRadios((prev) => [...prev, { value: `${prev.length}` }])
   }
   console.log(radios)
   return (
      <div>
         {getRadios()}
         <button type="button" onClick={addRadio}>
            click
         </button>
      </div>
   )
}
