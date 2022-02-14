import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs'

import CustomizedCard from '../components/UI/Card/CustomizedCard'
import Flexer from '../components/UI/Flexer'
import Table from '../components/UI/Table'

const DefaultRoute = ({ data }) => (
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
         <Route path="/" element={<DefaultRoute data={data} />} />
         <Route path="/:groupId" element={<TableWrapper />} />
      </Routes>
   )
}

// у некоторых роутов нет breadcrumbs
const TableWrapper = () => (
   <>
      <Breadcrumbs />
      <Table />
   </>
)
