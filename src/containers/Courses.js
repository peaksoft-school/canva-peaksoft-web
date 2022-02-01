import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import CustomizedCard from '../components/UI/Card/CustomizedCard'
import Flexer from '../components/UI/Flexer'
import Table from '../components/UI/Table'

const DefaultRoute = ({ data }) => (
   <Flexer>
      {data.map((item) => (
         <CustomizedCard {...item} key={item.id} />
      ))}
   </Flexer>
)

export default function Groups() {
   const data = useSelector((state) => state.data.data)
   return (
      <Routes>
         <Route path="/" element={<DefaultRoute data={data} />} />
         <Route path="/:courseId" element={<Table />} />
      </Routes>
   )
}
