import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { Typography } from '@mui/material'
import Card from '../components/UI/Card/Card'
import Flexer from '../components/UI/Flexer'
import Modal from '../components/UI/Modal'
import Table from '../components/UI/Table'
import Input from '../components/UI/Input'
import Button from '../components/UI/Button'
import DropZone from '../components/UI/DropZone'

const DefaultRoute = ({ data }) => {
   const [addCourseModal, setAddCourseModal] = React.useState(false)

   const [avatar, setAvatar] = React.useState(false)
   const [courseName, setCourseName] = React.useState('')
   const [courseDate, setCourseDate] = React.useState('')
   const [courseTitle, setCourseTitle] = React.useState('')

   // чтобы не мапался каждый раз когда печатаешь
   const courses = React.useCallback(
      data.map((item) => <Card {...item} key={item.id} />),
      [addCourseModal]
   )

   const onConfirm = () => {
      setAddCourseModal(false)
      setCourseDate('')
      setCourseName('')
      setCourseTitle('')
      setAvatar(false)
   }

   const onClose = () => {
      setCourseDate('')
      setCourseName('')
      setCourseTitle('')
      setAvatar(false)
      setAddCourseModal(false)
   }
   return (
      <>
         <Modal open={addCourseModal} onClose={onClose}>
            <Modal.Title>Создать курс</Modal.Title>
            <Modal.Body>
               <DropZone avatar={avatar} setAvatar={setAvatar} />

               <Typography width="45%" mx="auto" mb={2} color="gray">
                  Нажмите на иконку чтобы загрузить или перетащите фото
               </Typography>
               <Flexer justify="space-between">
                  <Input
                     width="65%"
                     placeholder="Название курса"
                     value={courseName}
                     onChange={(e) => setCourseName(e.target.value)}
                  />
                  <Input
                     width="30%"
                     type="date"
                     value={courseDate}
                     onChange={(e) => setCourseDate(e.target.value)}
                  />
               </Flexer>
               <Input
                  multiline
                  rows={4}
                  placeholder="Описание курса"
                  value={courseTitle}
                  onChange={(e) => setCourseTitle(e.target.value)}
               />
            </Modal.Body>
            <Modal.Footer>
               <Button variant="outlined" onClick={onClose}>
                  Отмена
               </Button>
               <Button variant="contained" onClick={onConfirm}>
                  Добавить
               </Button>
            </Modal.Footer>
         </Modal>
         <Flexer justify="flex-end" py={2} mx="1%">
            <Button onClick={() => setAddCourseModal(true)} variant="contained">
               Создать курс
            </Button>
         </Flexer>

         <Flexer justify="start">{courses}</Flexer>
      </>
   )
}

export default function Groups() {
   const data = useSelector((state) => state.data.data)
   return (
      <Routes>
         <Route path="/" element={<DefaultRoute data={data} />} />
         <Route path="/:courseId" element={<Table />} />
      </Routes>
   )
}
