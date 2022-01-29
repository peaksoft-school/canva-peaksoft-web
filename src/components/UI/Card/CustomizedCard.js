import React from 'react'
import { Card, CardMedia, Typography } from '@mui/material'
import classes from '../../../assets/styles/Cards.module.css'
import Meatballs from '../Meatballs/Meatballs'

const style = {
   maxWidth: 270,
   maxHeight: 311,
}

const CustomizedCard = ({ title, date, description, image }) => {
   return (
      <div className={classes.container}>
         <Card sx={style}>
            <CardMedia src={image} component="img" height="140" alt="img" />
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
            <Meatballs />
         </Card>
      </div>
   )
}

export default CustomizedCard
