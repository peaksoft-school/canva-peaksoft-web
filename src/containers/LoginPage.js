import React from 'react'
import Button from '../components/UI/Button'
import loginImg from '../assets/images/loginImage.png'
import classes from '../assets/styles/LoginPage.module.css'
import Input from '../components/UI/Input'

export default function LoginPage() {
   return (
      <div className={classes.container}>
         <div className={classes.leftSide}>
            <img className={classes.loginImg} src={loginImg} alt="loginImage" />
         </div>

         <div className={classes.rightSide}>
            <h1 className={classes.loginTitle}>
               Добро пожаловать <br /> в <span>Peaksoft LMS !</span>
            </h1>

            <div className={classes.loginForm}>
               <label htmlFor="login">Логин:</label>
               <Input placeholder="Введите логин" id="login" />
               <label htmlFor="password">Пароль:</label>
               <Input placeholder="Введите пароль" id="password" />
               <Button sx={{ fontSize: 18 }} variant="contained">
                  Войти
               </Button>
            </div>
         </div>
      </div>
   )
}
