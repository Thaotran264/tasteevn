import React from 'react'
import Collapse from 'react-bootstrap/Collapse';


const CollapseCustom = ({ open, id }) => {
  return (

    <Collapse in={open}>
      <div id={id}>
        { id }
      </div>
    </Collapse>

  )
}

export default CollapseCustom