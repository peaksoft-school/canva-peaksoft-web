import React from 'react'
import * as Yup from 'yup'
import { Box, InputAdornment } from '@mui/material'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import loginImg from '../assets/images/loginImage.png'
import classes from '../assets/styles/LoginPage.module.css'
import Input from '../components/UI/Input'
import Loading from '../components/UI/Loading'
import Button from '../components/UI/Button'
import { ReactComponent as Visibility } from '../assets/icons/showPassword.svg'
import { ReactComponent as VisibilityOff } from '../assets/icons/hidePassword.svg'
import { login } from '../store/action-creators/auth-action'
import { ROLES } from '../utils/constants/roles'

export default function LoginPage() {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const { isLoading } = useSelector((state) => state.auth)

   const [showPassword, setShowPassword] = React.useState(false)
   const handleClickShowPassword = () => setShowPassword(!showPassword)

   const handleLogin = async ({ email, password }, { setErrors }) => {
      try {
         const res = await dispatch(login({ email, password })).unwrap()
         if (res.roles[0] === ROLES.admin) navigate('/admin')
         if (res.roles[0] === ROLES.instructor) navigate('/instructor')
      } catch (e) {
         setErrors({ password: 'Wrong password' })
      }
   }

   const validationSchema = Yup.object({
      email: Yup.string('Enter your email')
         .required('Email is required!')
         .email('enter a valid email'),
      password: Yup.string('Enter your password')
         .min(4, 'Password should be of minimum 8 characters length')
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

   return (
      <Box className={classes.container} sx={{ opacity: isLoading ? 0.8 : '' }}>
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
