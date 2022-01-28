import React from 'react'
import { Box, Button } from '@mui/material'
import loginImg from '../assets/images/loginImage.png'
import classes from '../assets/styles/LoginPage.module.css'
import Input from '../components/UI/Input'

export default function LoginPage() {
   return (
      <Box className={classes.container}>
         <div className={classes.leftSide}>
            <img className={classes.loginImg} src={loginImg} alt="loginImage" />
         </div>

         <div className={classes.rightSide}>
            <h1 className={classes.loginTitle}>
               Добро пожаловать <br /> в <span>Peaksoft LMS !</span>
            </h1>
            <form className={classes.loginForm}>
               <label htmlFor="email">Логин:</label>
               <Input id="email" name="email" placeholder="Введите email" />
               <label htmlFor="password">Пароль:</label>
               <Input
                  placeholder="Введите пароль"
                  name="password"
                  id="password"
               />
               <Button sx={{ fontSize: 18 }} variant="contained" type="submit">
                  Войти
               </Button>
            </form>
         </div>
      </Box>
   )
}
