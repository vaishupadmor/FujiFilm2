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

<Input
       label="Director"
       value={films.director}
       onChange={(val)=>{setFilms({ ...films,director: val})}}
       placeholder={"Enter Director"}
      
       />

<Input
       label=" poster"
       value={films. poster}
       onChange={(val)=>{setFilms({ ...films, poster: val})}}
       placeholder={"Enter  poster"}
      
       />

<Input
       label="releaseYear"
       value={films.releaseYear}
       onChange={(val)=>{setFilms({ ...films,releaseYear: val})}}
       placeholder={"Enter releaseYear"}
      
       />

<Input
       label="category"
       value={films.category}
       onChange={(val)=>{setFilms({ ...films,category: val})}}
       placeholder={"Enter category"}
      
       />


<Input
       label=" language"
       value={films. language}
       onChange={(val)=>{setFilms({ ...films, language: val})}}
       placeholder={"Enter  language"}
      
       />


<Input
       label="rating"
       value={films.rating}
       onChange={(val)=>{setFilms({ ...films,rating: val})}}
       placeholder={"Enter rating"}
      
       />

       
       
    </div>

</div>



  )
}

export default AddFilm