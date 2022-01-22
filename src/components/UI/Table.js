import * as React from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'

const columns = [
   { id: 'id', label: 'ID', align: 'left' },
   { id: 'fullname', label: 'Имя и Фамилия', align: 'center' },
   {
      id: 'group',
      label: 'Группа',
      align: 'left',
   },
   {
      id: 'format',
      label: 'Формат',
      align: 'left',
   },
   {
      id: 'phoneNumber',
      label: 'Номер телефона',
      align: 'left',
   },
   {
      id: 'email',
      label: 'Email',
      align: 'left',
   },
]

function createData(id, fullname, group, format, phoneNumber, email) {
   return { id, fullname, group, format, phoneNumber, email }
}

const rows = [
   createData(
      '1',
      'Anna Karimova',
      'JS-15-22',
      'Онлайн',
      '0777114676',
      'John@gmail.com'
   ),
   createData(
      '2',
      'Anna Karimova',
      'JS-15-22',
      'Онлайн',
      '0777114676',
      'John@gmail.com'
   ),
   createData(
      '3',
      'Anna Karimova',
      'JS-15-22',
      'Онлайн',
      '0777114676',
      'John@gmail.com'
   ),
   createData(
      '4',
      'Anna Karimova',
      'JS-15-22',
      'Онлайн',
      '0777114676',
      'John@gmail.com'
   ),
]

export default function StickyHeadTable() {
   const [page, setPage] = React.useState(0)
   const [rowsPerPage, setRowsPerPage] = React.useState(10)

   const handleChangePage = (event, newPage) => {
      setPage(newPage)
   }

   const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value)
      setPage(0)
   }

   return (
      <Paper
         sx={{
            width: '90%',
            height: '90%',
            overflow: 'hidden',
            mx: 'auto',
         }}
      >
         <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
               <TableHead>
                  <TableRow>
                     {columns.map((column) => (
                        <TableCell
                           key={column.id}
                           align={column.align}
                           sx={{ fontWeight: 'bold' }}
                        >
                           {column.label}
                        </TableCell>
                     ))}
                  </TableRow>
               </TableHead>
               <TableBody>
                  {rows
                     .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                     )
                     .map((row) => {
                        return (
                           <TableRow
                              hover
                              role="checkbox"
                              tabIndex={-1}
                              key={row.id}
                           >
                              {columns.map((column) => {
                                 const value = row[column.id]
                                 return (
                                    <TableCell
                                       key={column.id}
                                       align={column.align}
                                    >
                                       {value}
                                    </TableCell>
                                 )
                              })}
                           </TableRow>
                        )
                     })}
               </TableBody>
            </Table>
         </TableContainer>
         <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
         />
      </Paper>
   )
}
