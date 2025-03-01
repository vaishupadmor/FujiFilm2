import React from 'react'
import "./Button.css"

function Button({title,onClick,variant}) {
  return (
    <div>
        <button onClick={onClick} type='button' className={`btn ${variant}`}> {title}</button>
     
    </div>
  )
}

export default Button