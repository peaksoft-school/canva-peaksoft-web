import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Courses from '../containers/Courses'
import { INSTRUCTOR_PAGE_SIDEBAR } from '../utils/constants/sidebarConstants'
import Layout from './Layout'

export default function InstructorPage() {
   return (
      <Layout sidebarData={INSTRUCTOR_PAGE_SIDEBAR}>
         <Routes>
            <Route path="my-courses/*" element={<Courses />} />
            <Route path="my-courses:courseId" element={<div>hello</div>} />
            <Route
               path="my-courses:courseId/teachers"
               element={<div>hello</div>}
            />
            <Route
               path="my-courses:courseId/students"
               element={<div>hello</div>}
            />
         </Routes>
      </Layout>
   )
}
