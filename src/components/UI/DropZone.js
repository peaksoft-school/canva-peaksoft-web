import { styled } from '@mui/material'
import React from 'react'
import { useDropzone } from 'react-dropzone'
import { ReactComponent as DropImg } from '../../assets/icons/dropImg.svg'

export default function DropZone({ avatar, setAvatar }) {
   const { getRootProps, getInputProps } = useDropzone({
      accept: 'image/*',
      onDrop: (files) => {
         setAvatar({
            avatar: files[0],
            preview: URL.createObjectURL(files[0]),
         })
      },
   })
   return (
      <span {...getRootProps()}>
         <input {...getInputProps()} />
         {!avatar ? (
            <DropImg />
         ) : (
            <StyledImg src={avatar?.preview} alt="avatar-preview" />
         )}
      </span>
   )
}

const StyledImg = styled('img')(() => ({
   maxWidth: '143px',
   maxHeight: '145',
   borderRadius: '10px',
}))
