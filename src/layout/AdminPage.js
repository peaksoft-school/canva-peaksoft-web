import React from 'react'
import AdminPanelRoute from '../routes/AdminPanelRoute'
import { ADMIN_PAGE_SIDEBAR } from '../utils/constants/sidebarConstants'
import Layout from './Layout'

export default function AdminPage() {
   return (
      <Layout sidebarData={ADMIN_PAGE_SIDEBAR}>
         <AdminPanelRoute />
      </Layout>
   )
}
