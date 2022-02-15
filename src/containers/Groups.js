import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs'

import CustomizedCard from '../components/UI/Card/CustomizedCard'
import Flexer from '../components/UI/Flexer'
import Table from '../components/UI/Table'

const GroupsRoute = ({ data }) => (
   <Flexer justify="start">
      {data.map((item) => (
         <CustomizedCard {...item} key={item.id} />
      ))}
   </Flexer>
)

export default function Groups() {
   const data = useSelector((state) => state.data.data)

   return (
      <Routes>
         <Route path="/" element={<GroupsRoute data={data} />} />
         <Route path="/:groupId" element={<GroupsTable />} />
      </Routes>
   )
}

const GroupsTable = () => (
   <>
      <Breadcrumbs />
      <Table />
   </>
)
