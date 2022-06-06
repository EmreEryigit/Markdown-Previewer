import React from 'react'

function Form(props) {
  return (
    <div >
    <h5>Write Here</h5>
        <textarea name="" value={props.text} className="form-control" onChange={(e) => props.setText(e.target.value)} style={{backgroundColor: "yellow"}}  id="" cols="75" rows="30"></textarea>
    </div>
  )
}

export default Form