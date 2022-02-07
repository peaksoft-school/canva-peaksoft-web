import React from 'react'
import * as Yup from 'yup'
import { Box, Button } from '@mui/material'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import loginImg from '../assets/images/loginImage.png'
import classes from '../assets/styles/LoginPage.module.css'
import Input from '../components/UI/Input'
import Loading from '../components/UI/Loading'

export default function LoginPage() {
   // const isLoggedIn = false
   const navigate = useNavigate()
   const [isLoading, setIsloading] = React.useState(false)

   const handleLogin = (formValue) => {
      // const { email, password } = formValue
      // dispatch(login({ email, password }))
      setIsloading(formValue)
      return navigate('/admin')
   }

   //* validation
   const validationSchema = Yup.object({
      email: Yup.string('Enter your email')
         .required('Email is required!')
         .email('enter a valid email'),
      password: Yup.string('Enter your password')
         .min(8, 'Password should be of minimum 8 characters length')
         .required('Password is required'),
   })

   const formik = useFormik({
      initialValues: {
         email: '',
         password: '',
      },
      validationSchema,
      onSubmit: handleLogin,
   })

   // if (isLoggedIn) return navigate('/admin')

   return (
      <Box className={classes.container} sx={{ opacity: isLoading ? 0.9 : '' }}>
         <Loading className={classes.loading} display={isLoading} />
         <div className={classes.leftSide}>
            <img className={classes.loginImg} src={loginImg} alt="loginImage" />
         </div>

         <div className={classes.rightSide}>
            <h1 className={classes.loginTitle}>
               Добро пожаловать <br /> в <span>Peaksoft LMS !</span>
            </h1>
            <form className={classes.loginForm} onSubmit={formik.handleSubmit}>
               <label htmlFor="email">Логин:</label>
               <Input
                  id="email"
                  name="email"
                  placeholder="Введите email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
               />
               <label htmlFor="password">Пароль:</label>
               <Input
                  placeholder="Введите пароль"
                  name="password"
                  id="password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                     formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
               />
               <Button sx={{ fontSize: 18 }} variant="contained" type="submit">
                  Войти
               </Button>
            </form>
         </div>
      </Box>
   )
}
