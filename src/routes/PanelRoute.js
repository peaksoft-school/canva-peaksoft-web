import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Courses from '../containers/Courses'
import Groups from '../containers/Groups'
import LessonForm from '../containers/LessonForm'
import Teachers from '../containers/Teachers'
import Students from '../containers/Students'

export default function PanelRoute() {
   return (
      <Routes>
         <Route path="groups/*" element={<Groups />} />
         <Route path="courses/*" element={<Courses />} />
         <Route path="teachers" element={<Teachers />} />
         <Route path="students" element={<Students />} />
         <Route path="add-lesson" element={<LessonForm />} />
      </Routes>
   )
}
