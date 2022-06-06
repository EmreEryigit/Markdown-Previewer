import React from 'react'

function Preview(props) {
  return (
    <div >
        <h5>Preview</h5>
        <textarea name="" id="" cols="70" rows="30" className='ms-2 form-control' style={{backgroundColor: "yellow"}}  value={props.text} readOnly></textarea>
    </div>
  )
}

export default Preview