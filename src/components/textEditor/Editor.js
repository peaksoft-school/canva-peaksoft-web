import React from 'react'
import ReactQuill from 'react-quill'
import styled from 'styled-components'
import CustomToolbar, { modules, formats } from './EditorToolbar'
import 'react-quill/dist/quill.snow.css'

const StyledTextEditor = styled.div`
   .ql-container {
      font-style: normal;
      font-size: 1.2rem;
      border-radius: 10px;
      border-color: rgba(0, 0, 0, 0.23);
      padding: 10px;
   }
   .ql-container:hover {
      border-width: 1px;
      border-color: black;
   }
   .ql-container:focus-within {
      outline: 2px solid #1976d2;
      border: none;
   }
   .ql-editor.ql-blank::before {
      color: rgb(162, 162, 162);
      font-style: normal;
   }
   .ql-editor {
      padding: 5px;

      height: 55vh;
   }
   .ql-tooltip {
      top: 0 !important;
      right: 0 !important;
      left: auto !important;
   }
   .ql-snow.ql-toolbar button svg {
      float: none;
      height: 23px;
      width: 23px;
   }
   .ql-snow.ql-toolbar button.ql-active svg {
      background-color: #6a6c6e;
      border-radius: 8px;
      color: initial;
   }
`

export const Editor = () => {
   const [state, setState] = React.useState({ value: null })
   const handleChange = (value) => {
      setState({ value })
   }
   return (
      <StyledTextEditor>
         <CustomToolbar />
         <ReactQuill
            value={state.value}
            onChange={handleChange}
            placeholder="Добавьте задание / я"
            modules={modules}
            formats={formats}
         />
      </StyledTextEditor>
   )
}

export default Editor