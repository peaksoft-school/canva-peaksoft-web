import React from 'react'
import { Card, CardMedia, Typography, Button } from '@mui/material'
import styled from 'styled-components'
import classes from './Cards.module.css'
import group from '../../../assets/images/group.png'

const StyledButton = styled(Button)`
   font-size: 20px;
   font-weight: bold;
`
const Cards = ({ title, onClick, date, description }) => {
   return (
      <div className={classes.container}>
         <Card sx={{ maxWidth: 270, maxHeight: 311 }}>
            <CardMedia
               src={group}
               // src={props.image}
               component="img"
               height="140"
               alt="img"
            />
            <div className={classes.content}>
               <Typography
                  fontSize={20}
                  fontWeight={600}
                  fontFamily="Open Sans"
                  gutterBottom
               >
                  {title}
               </Typography>
               <Typography fontFamily="Open Sans" fontSize={12}>
                  {date}
               </Typography>
            </div>
            <Typography
               height={18}
               fontFamily="Open Sans"
               fontSize={16}
               noWrap
               padding={2}
               gutterBottom
            >
               {description}
            </Typography>
            <div className={classes.next}>
               <StyledButton onClick={onClick}>...</StyledButton>
            </div>
         </Card>
      </div>
   )
}

export default Cards
