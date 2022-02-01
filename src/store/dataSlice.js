import { createSlice } from '@reduxjs/toolkit'
import cardImage from '../assets/images/cardImage.png'

const createData = (
   title,
   date,
   description,
   id = Math.random().toString(),
   image = cardImage
) => ({ title, image, date, description, id })

const DUMMY_DATA = [
   createData(
      'Data Engineer',
      '2019-2020',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare pretium placerat ut ... ',
      '1'
   ),
   createData(
      'Data Engineer',
      '2019-2020',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare pretium placerat ut ... ',
      '2'
   ),
   createData(
      'Data Engineer',
      '2019-2020',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare pretium placerat ut ... ',
      '3'
   ),
   createData(
      'Data Engineer',
      '2019-2020',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare pretium placerat ut ... ',
      '4'
   ),
   createData(
      'Data Engineer',
      '2019-2020',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare pretium placerat ut ... ',
      '5'
   ),
   createData(
      'Data Engineer',
      '2019-2020',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare pretium placerat ut ... ',
      '6'
   ),
   createData(
      'Data Engineer',
      '2019-2020',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare pretium placerat ut ... ',
      '7'
   ),
   createData(
      'Data Engineer',
      '2019-2020',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare pretium placerat ut ... ',
      '8'
   ),
   createData(
      'Data Engineer',
      '2019-2020',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare pretium placerat ut ... ',
      '9'
   ),
   createData(
      'Data Engineer',
      '2019-2020',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare pretium placerat ut ... ',
      '10'
   ),
]

const dataSlice = createSlice({
   name: 'data',
   initialState: {
      data: DUMMY_DATA,
   },
})

export default dataSlice.reducer
