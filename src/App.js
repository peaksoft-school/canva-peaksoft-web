import './App.css'
import MainRouter from './routes/MainRouter'
import Header from './components/Header/Header'
import React from 'react'

const TEACHER_TABS = [
   {
      title: 'Учителя',
      link: '/teachers'
   },
   {
      title: 'Cneltyns',
      link: '/blabla'
   }
]

const ADMIN_TABS = [
   {
      title: 'lalala',
      link: '/lalal'
   },
   {
      title: 'haha',
      link: '/hahah'
   }
]

function App() {
   return(
      <>
         <Header role="Администратор" withTabs tabs={ADMIN_TABS}/>
         <Header role="Teacher micher" withTabs tabs={TEACHER_TABS}/>
         <Header role="without tabs" />
         <MainRouter />
      </>
   )
}

export default App
