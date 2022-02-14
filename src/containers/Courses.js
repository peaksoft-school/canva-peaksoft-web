import { Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Card from '../components/UI/Card/Card'
import Flexer from '../components/UI/Flexer'
import Modal from '../components/UI/Modal'
import Table from '../components/UI/Table'
import Input from '../components/UI/Input'
import Button from '../components/UI/Button'
import DropZone from '../components/UI/DropZone'
import Skeleton from '../components/UI/Skeleton'

const initState = {
   avatar: '',
   name: '',
   date: '',
   title: '',
}

const CourseRoute = ({ data }) => {
   const isLoading = useSelector((state) => state.data.loading)

   const [addCourseModal, setAddCourseModal] = React.useState(false)

   const [course, setCourse] = React.useState(initState)

   const handleChangeData = (e) =>
      setCourse((prev) => ({
         ...prev,
         [e.target.name]: e.target.value,
      }))

   const setAvatar = (value) =>
      setCourse((prev) => ({ ...prev, avatar: value }))

   const courses = React.useCallback(
      data.map((item) =>
         isLoading ? (
            <Skeleton key={item.id} />
         ) : (
            <Card {...item} key={item.id} />
         )
      ),
      [addCourseModal, data]
   )

   const onConfirm = () => {
      setCourse(initState)
      setAddCourseModal(false)
   }

   const onClose = () => {
      setCourse(initState)
      setAddCourseModal(false)
   }
   return (
      <>
         <Modal open={addCourseModal} onClose={onClose}>
            <Modal.Title>Создать курс</Modal.Title>
            <Modal.Body>
               <DropZone avatar={course.avatar} setAvatar={setAvatar} />

               <Typography width="45%" mx="auto" mb={2} color="gray">
                  Нажмите на иконку чтобы загрузить или перетащите фото
               </Typography>
               <Flexer justify="space-between">
                  <Input
                     width="65%"
                     name="name"
                     placeholder="Название курса"
                     value={course.name}
                     onChange={handleChangeData}
                  />
                  <Input
                     width="30%"
                     type="date"
                     name="date"
                     value={course.date}
                     onChange={handleChangeData}
                  />
               </Flexer>
               <Input
                  multiline
                  rows={4}
                  placeholder="Описание курса"
                  name="title"
                  value={course.title}
                  onChange={handleChangeData}
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

export default function Courses() {
   const data = useSelector((state) => state.data.data)

   return (
      <Routes>
         <Route path="/" element={<CourseRoute data={data} />} />
         <Route path="/:courseId" element={<Table />} />
      </Routes>
   )
}
