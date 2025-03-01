import React,{useState} from 'react'
import  "./AddFilm.css"
import Input from '../../components/Input/Input'

function AddFilm() {
    const [films,setFilms] =useState({
                title:"",
                shortDescription:"",
                director:"",
                poster:"",
                releaseYear:"",
                category:"",
                language:"",
                rating:"",
    })
  return (
<div>
    <h1> AddFilm</h1>
    <div   className='add-film-form'>
       <Input
       label="Title"
       value={films.title}
       onChange={(val)=>{setFilms({ ...films,title: val})}}
       placeholder={"Enter Title"}
      
       />
       <Input
       label="Short Description"
       value={films.shortDescription}
       onChange={(val)=>{setFilms({ ...films,shortDescription: val})}}
       placeholder={"Enter Short Description"}
      
       />

       
       
    </div>

</div>



  )
}

export default AddFilm