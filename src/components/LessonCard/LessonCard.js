import * as React from 'react'

import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import { ListItem, ListItemText, Button } from '@mui/material'
import Divider from '@mui/material/Divider'
import styled from 'styled-components'
import CardSettings from './CardSettings'
import InputSelect from './LessonTypeForm'
import { ReactComponent as Videosvg } from '../../assets/icons/LessonCardsSvg/videosvg.svg'
import { ReactComponent as Presentationsvg } from '../../assets/icons/LessonCardsSvg/presentationsvg.svg'
import { ReactComponent as Tasksvg } from '../../assets/icons/LessonCardsSvg/tasksvg.svg'
import { ReactComponent as Linksvg } from '../../assets/icons/LessonCardsSvg/linksvg.svg'
import { ReactComponent as Testsvg } from '../../assets/icons/LessonCardsSvg/testsvg.svg'
import { ReactComponent as Reeditsvg } from '../../assets/icons/LessonCardsSvg/reedit.svg'
import { ReactComponent as Deletesvg } from '../../assets/icons/LessonCardsSvg/deleteBasket.svg'

const StyledText = styled(ListItemText)`
   span {
      font-family: Open Sans;
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      color: #000000;
      padding-left: 15px;
   }
`

const StyledTitle = styled(ListItemText)`
   span {
      font-family: Open Sans;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 25px;
      color: #000000;
      padding-left: 15px;
   }
`

const style = {
   width: 560,
   bgcolor: 'background.paper',
   border: '1px solid #EBEBEB',
   borderRadius: '10px',
}

export default function LessonCard({ onClick, ...otherProps }) {
   return (
      <Box sx={style}>
         <List {...otherProps}>
            <ListItem onClick={onClick}>
               <Button>
                  <Reeditsvg onClick={onClick} />
               </Button>
               <StyledTitle primary="LESSON_1" />
               <InputSelect />
               <Button>
                  <Deletesvg onClick={onClick} />
               </Button>
            </ListItem>
         </List>

         <Divider />

         <List>
            <ListItemButton onClick={onClick} disableRipple>
               <Videosvg />
               <StyledText primary="Видеоурок" />
               <CardSettings />
            </ListItemButton>

            <ListItemButton onClick={onClick} disableRipple>
               <Presentationsvg />
               <StyledText primary="Презентация" />
               <CardSettings />
            </ListItemButton>

            <ListItemButton onClick={onClick} disableRipple>
               <Tasksvg />
               <StyledText primary="Задание" />
               <CardSettings />
            </ListItemButton>

            <ListItemButton onClick={onClick} disableRipple>
               <Linksvg />
               <StyledText primary="Ссылка" />
               <CardSettings />
            </ListItemButton>

            <ListItemButton onClick={onClick} disableRipple>
               <Testsvg />
               <StyledText primary="Тест" />
               <CardSettings />
            </ListItemButton>
         </List>
      </Box>
   )
}
