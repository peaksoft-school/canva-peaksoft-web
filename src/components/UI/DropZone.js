import { styled } from '@mui/material'
import React from 'react'
import { useDropzone } from 'react-dropzone'
import { ReactComponent as DropImg } from '../../assets/icons/dropImg.svg'
import IF from './IF'

export default function DropZone({ avatar, setAvatar }) {
   const { getRootProps, getInputProps } = useDropzone({
      accept: 'image/*',
      onDrop: (files) => {
         setAvatar(
            files.map((file) =>
               Object.assign(file, {
                  preview: URL.createObjectURL(file),
               })
            )
         )
      },
   })
   return (
      <StyledDiv {...getRootProps()}>
         <input {...getInputProps()} />
         <IF
            condition={!avatar}
            ins={<DropImg />}
            ins2={<StyledImg src={avatar[0]?.preview} alt="hhe" />}
         />
      </StyledDiv>
   )
}

const StyledImg = styled('img')(() => ({
   maxWidth: '143px',
   maxHeight: '145',
   borderRadius: '10px',
}))

const StyledDiv = styled('div')(() => ({
   display: 'inline-block',
}))
