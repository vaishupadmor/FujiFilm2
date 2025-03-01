import React from 'react'
import "./Input.css";

function Input({value,setValue,label,placeholder, text="text"}) {
  return (
    <div>
        <div className='input-container'>
          <label htmlFor={label}  className='input-label'>{label}</label>
          <input type={text} id={label} className='input-element' value={value} onChange={(e)=>setValue(e.target.value)} placeholder={placeholder}/>
        </div>
    </div>
  )
}

export default Input