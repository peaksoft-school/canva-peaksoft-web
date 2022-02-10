import React from 'react'
import {
   Card as MUICard,
   CardContent,
   ListItem,
   styled,
   Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Meatballs from '../Meatballs/Meatballs'
import CardMenu from './CardMenu'
import Flexer from '../Flexer'
import Image from '../Image'
import DeleteModal from '../DeleteModal/DeleteModal'
import Modal from '../Modal'
import Input from '../Input'
import Button from '../Button'
import DropZone from '../DropZone'

export default function Card({ title, date, description, image, id, remove }) {
   const dispatch = useDispatch()

   const openGroup = (e) => {
      e.stopPropagation()
      e.preventDefault()
      setAnchorEl(e.currentTarget)
   }

   const [anchorEl, setAnchorEl] = React.useState(null)
   const isOpen = Boolean(anchorEl)
   const handleClose = () => {
      setAnchorEl(null)
   }

   // add teacher modal
   const [addModal, setAddModal] = React.useState(false)

   const onAddTeacher = () => {
      setAddModal(false)
   }

   // change modal
   const onChangeGroup = () => {
      handleClose()
   }
   console.log('mapped')

   // delete modal
   const [deleteModal, setDeleteModal] = React.useState(false)

   const removeGroup = () => {
      setDeleteModal(false)
      dispatch(remove(id))
   }

   const [editModal, setEditModal] = React.useState(false)

   const [avatar, setAvatar] = React.useState(false)
   const [cardName, editCardName] = React.useState('')
   const [cardDate, editCardDate] = React.useState('')
   const [cardTitle, editCardTitle] = React.useState('')

   const submitEdit = () => {
      setEditModal('')
   }

   const onCloseEditModal = () => {
      setEditModal(false)
   }

   return (
      <>
         {/* delete modal */}
         <DeleteModal
            open={deleteModal}
            onClose={() => setDeleteModal(false)}
            onConfirm={removeGroup}
         />

         <Modal open={addModal} onClose={() => setAddModal(false)}>
            <Modal.Title>Добавить ученика</Modal.Title>
            <Modal.Body>
               <ListItem>
                  <Input placeholder="Имя" />
               </ListItem>
               <ListItem>
                  <Input placeholder="Фамилия" />
               </ListItem>
               <ListItem>
                  <Input placeholder="+996 ___ __ __ __" />
               </ListItem>
               <ListItem>
                  <Input placeholder="Email" />
               </ListItem>
            </Modal.Body>
            <Modal.Footer>
               <Button variant="outlined" onClick={() => setAddModal(false)}>
                  Отмена
               </Button>
               <Button variant="contained" onClick={onAddTeacher}>
                  Добавить
               </Button>
            </Modal.Footer>
         </Modal>

         <Modal open={editModal} onClose={onCloseEditModal}>
            <Modal.Title>Редактировать курс</Modal.Title>
            <Modal.Body>
               <DropZone avatar={avatar} setAvatar={setAvatar} />

               <Typography width="45%" mx="auto" mb={2} color="gray">
                  Нажмите на иконку чтобы загрузить или перетащите фото
               </Typography>
               <Flexer justify="space-between">
                  <Input
                     width="65%"
                     placeholder="Название курса"
                     value={cardName}
                     onChange={(e) => editCardName(e.target.value)}
                  />
                  <Input
                     width="30%"
                     type="date"
                     value={cardDate}
                     onChange={(e) => editCardDate(e.target.value)}
                  />
               </Flexer>
               <Input
                  multiline
                  rows={4}
                  placeholder="Описание курса"
                  value={cardTitle}
                  onChange={(e) => editCardTitle(e.target.value)}
               />
            </Modal.Body>
            <Modal.Footer>
               <Button variant="outlined" onClick={onCloseEditModal}>
                  Отмена
               </Button>
               <Button variant="contained" onClick={submitEdit}>
                  Добавить
               </Button>
            </Modal.Footer>
         </Modal>

         {/* dropdown */}
         <CardMenu
            anchorEl={anchorEl}
            handleClose={handleClose}
            open={isOpen}
            setRemove={() => setDeleteModal(true)}
            setAdd={() => setAddModal(true)}
            setEdit={() => setEditModal(true)}
            setOnChange={onChangeGroup}
         />

         {/* card */}
         <StyledCard>
            <StyledLink to={id}>
               <Image src={image} height="140" alt="img" />
               <StyledCardContent>
                  <Flexer justify="space-between" mt="12px">
                     <Typography fontSize={20} fontWeight="bold">
                        {title}
                     </Typography>
                     <Typography fontSize={12}>{date}</Typography>
                  </Flexer>
                  <Typography height={18} gutterBottom>
                     {description}
                  </Typography>
               </StyledCardContent>
               <Meatballs onClick={openGroup} />
            </StyledLink>
         </StyledCard>
      </>
   )
}

const StyledCard = styled(MUICard)(() => ({
   '&.MuiCard-root': {
      maxWidth: 250,
      maxHeight: 311,
      flexBasis: '23%',
      margin: '1%',
      textAlign: 'left',
      marginBottom: '15px',
      '*': {
         fontFamily: 'Open Sans',
      },
   },
}))

const StyledCardContent = styled(CardContent)(() => ({
   '&.MuiCardContent-root': {
      padding: '0px 1rem 2rem 1rem',
   },
}))

const StyledLink = styled(Link)(() => ({
   textDecoration: 'none',
   color: 'inherit',
}))
