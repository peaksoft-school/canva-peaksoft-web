import React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const style = {
   m: 1,
   minWidth: 141,
   marginRight: 4,
}

export default function InputSelect() {
   const [value, setValue] = React.useState('')
   const [open, setOpen] = React.useState(false)

   const handleChange = (event) => {
      setValue(event.target.value)
   }

   const handleClose = () => {
      setOpen(false)
   }

   const handleOpen = () => {
      setOpen(true)
   }

   return (
      <div>
         <FormControl sx={style}>
            <InputLabel
               style={{ fontSize: '12px', marginTop: '5px' }}
               id="open-select-label"
               variant="outlined"
            >
               Добавить
            </InputLabel>
            <Select
               labelId="dopen-select-label"
               id="open-select"
               open={open}
               onClose={handleClose}
               onOpen={handleOpen}
               value={value}
               label="value"
               onChange={handleChange}
            >
               <MenuItem value={5}>None</MenuItem>
               <MenuItem value={10}>Видеоурок</MenuItem>
               <MenuItem value={20}>Презентация</MenuItem>
               <MenuItem value={40}>Задание</MenuItem>
               <MenuItem value={50}>Ссылка</MenuItem>
               <MenuItem value={60}>Тест</MenuItem>
            </Select>
         </FormControl>
      </div>
   )
}
