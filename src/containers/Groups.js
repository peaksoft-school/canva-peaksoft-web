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

const initState = {
   avatar: '',
   name: '',
   date: '',
   title: '',
}

const DefaultRoute = ({ data }) => {
   const [addGroupModal, setAddGroupModal] = React.useState(false)

   const groups = React.useCallback(
      data.map((item) => <Card {...item} key={item.id} />),
      [addGroupModal]
   )

   const [group, setGroup] = React.useState(initState)

   const handleChangeData = (e) =>
      setGroup((prev) => ({
         ...prev,
         [e.target.name]: e.target.value,
      }))

   const handleChangeAvatar = (file) =>
      setGroup((prev) => ({ ...prev, avatar: file }))

   const onConfirm = () => {
      setGroup(initState)
      setAddGroupModal(false)
   }
   const onClose = () => {
      setGroup(initState)
      setAddGroupModal(false)
   }
   return (
      <>
         <Modal open={addGroupModal} onClose={onClose}>
            <Modal.Title>Создать группу</Modal.Title>
            <Modal.Body>
               <DropZone avatar={group.avatar} setAvatar={handleChangeAvatar} />

               <Typography width="45%" mx="auto" mb={2} color="gray">
                  Нажмите на иконку чтобы загрузить или перетащите фото
               </Typography>
               <Flexer justify="space-between">
                  <Input
                     width="65%"
                     name="name"
                     placeholder="Название курса"
                     value={group.name}
                     onChange={handleChangeData}
                  />
                  <Input
                     width="30%"
                     type="date"
                     name="date"
                     value={group.date}
                     onChange={handleChangeData}
                  />
               </Flexer>
               <Input
                  multiline
                  rows={4}
                  placeholder="Описание курса"
                  name="title"
                  value={group.title}
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
            <Button onClick={() => setAddGroupModal(true)} variant="contained">
               Создать группу
            </Button>
         </Flexer>

         <Flexer justify="start">{groups}</Flexer>
      </>
   )
}

export default function Groups() {
   const data = useSelector((state) => state.data.data)

   return (
      <Routes>
         <Route path="/" element={<DefaultRoute data={data} />} />
         <Route path="/:groupId" element={<Table />} />
      </Routes>
   )
}
