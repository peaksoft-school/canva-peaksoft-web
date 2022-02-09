import { Skeleton, Stack } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import CustomizedCard from '../components/UI/Card/CustomizedCard'
import Flexer from '../components/UI/Flexer'
import Table from '../components/UI/Table'

const CourseRoute = ({ data }) => {
   const isLoading = useSelector((state) => state.data.loading)

   return (
      <Flexer>
         {data.map((item) =>
            isLoading ? (
               <Stack key={item.id} spacing={1} m="10px" height="250px">
                  <Skeleton variant="rectangular" width={250} height={140} />
                  <Skeleton variant="text" width="60%" height="auto" />
                  <Skeleton animation="wave" height={10} sx={{ mb: 1 }} />
                  <Skeleton animation="wave" height={10} />
                  <Skeleton animation="wave" height={10} width="80%" />
               </Stack>
            ) : (
               <CustomizedCard {...item} key={item.id} />
            )
         )}
      </Flexer>
   )
}

export default function Courses() {
   const data = useSelector((state) => state.data.data)

   return (
      <Routes>
         <Route path="/" element={<CourseRoute data={data} />} />
         <Route path="/:courseId" element={<Table />} />
      </Routes>
   )
}
