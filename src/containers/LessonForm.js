import { Box, Paper } from '@mui/material'
import React from 'react'
import 'react-quill/dist/quill.snow.css'
import { Editor } from '../components/TextEditor/Editor'
import Button from '../components/UI/Button'
import Input from '../components/UI/Input'

export default function LessonForm() {
   return (
      <Box
         component="form"
         sx={{
            width: '95%',
            height: 'auto',
            mx: 'auto',
            p: 2,
         }}
      >
         <Paper sx={{ p: 2, borderRadius: 4 }}>
            <Input placeholder="Название задания" />
            <Editor />
         </Paper>
         <Box
            display="flex"
            width="20%"
            p="20px"
            ml="auto"
            justifyContent="space-between"
         >
            <Button variant="outlined">Отмена</Button>
            <Button variant="contained" type="submit">
               Сохранить
            </Button>
         </Box>
      </Box>
   )
}
