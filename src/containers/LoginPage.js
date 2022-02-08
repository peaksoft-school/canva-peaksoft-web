import React from 'react'
import * as Yup from 'yup'
import { Box, InputAdornment } from '@mui/material'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import loginImg from '../assets/images/loginImage.png'
import classes from '../assets/styles/LoginPage.module.css'
import Input from '../components/UI/Input'
import Loading from '../components/UI/Loading'
import Button from '../components/UI/Button'
import { ReactComponent as Visibility } from '../assets/icons/showPassword.svg'
import { ReactComponent as VisibilityOff } from '../assets/icons/hidePassword.svg'

export default function LoginPage() {
   const navigate = useNavigate()

   // const isLoggedIn = false
   const [isLoading, setIsloading] = React.useState(false)
   const [showPassword, setShowPassword] = React.useState(false)
   const handleClickShowPassword = () => setShowPassword(!showPassword)

   const handleLogin = (formValue) => {
      console.log(formValue)
      // const { email, password } = formValue
      // dispatch(login({ email, password }))
      setIsloading(true)
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
      <Box className={classes.container} sx={{ opacity: isLoading ? 0.7 : '' }}>
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
                  placeholder="Введите email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
               />
               <label htmlFor="password">Пароль:</label>
               <Input
                  id="password"
                  placeholder="Введите пароль"
                  type={showPassword ? 'text' : 'password'}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                     formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                  InputProps={{
                     endAdornment: (
                        <InputAdornment position="end">
                           {formik.values.password && (
                              <Button
                                 onClick={handleClickShowPassword}
                                 disableRipple
                              >
                                 {showPassword ? (
                                    <Visibility />
                                 ) : (
                                    <VisibilityOff />
                                 )}
                              </Button>
                           )}
                        </InputAdornment>
                     ),
                  }}
               />
               <Button
                  align="center"
                  sx={{ fontSize: 18 }}
                  variant="contained"
                  type="submit"
                  className={classes.submitButton}
               >
                  Войти
               </Button>
            </form>
         </div>
      </Box>
   )
}
