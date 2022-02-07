import React from 'react'
import styled from 'styled-components'

export const modules = {
   toolbar: {
      container: '#toolbar',
   },
}

// Formats objects for setting up the Quill editor
export const formats = [
   'header',
   'bold',
   'italic',
   'underline',
   'list',
   'bullet',
   'link',
   'image',
   'video',
   'code-block',
]

const ToolbarButton = ({ className, value }) => (
   <button
      type="button"
      className={className}
      value={value}
      aria-label="toolbar-button"
   />
)

const StyledWrapper = styled.div`
   .ql-snow * {
      box-sizing: unset;
   }
   .ql-toolbar {
      text-align: right;
      border: none;
   }
   .ql-header {
      text-align: left;
   }
   .ql-toolbar button {
      width: 30px;
      height: 30px;
   }
`

// Quill Toolbar component
const CustomToolbar = () => (
   <StyledWrapper className="wrapper">
      <div id="toolbar">
         <span className="ql-formats">
            <select className="ql-header" defaultValue="3">
               <option value="1">Heading</option>
               <option value="2">Subheading</option>
               <option value="3">Normal</option>
            </select>
         </span>
         <span className="ql-formats">
            <ToolbarButton className="ql-italic" />
            <ToolbarButton className="ql-underline" />
            <ToolbarButton className="ql-bold" />
            <ToolbarButton className="ql-list" value="bullet" />
            <ToolbarButton className="ql-list" value="ordered" />
            <ToolbarButton className="ql-image" />
            <ToolbarButton className="ql-video" />
            <ToolbarButton className="ql-code-block" />
         </span>
      </div>
   </StyledWrapper>
)

export default CustomToolbar
