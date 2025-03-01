import React,{useState} from 'react'
import "./AddFilm.css";
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import axios from 'axios'
import toast from 'react-hot-toast'
import {Link} from 'react-router-dom'

function AddFilm() {
    const [film,setFilm] =useState({
                title:"",
                shortDescription:"",
                director:"",
                poster:"",
                releaseYear:"",
                category:"",
                language:"",
                rating:"",
    });

    const addFilm = async()=>{
       try{
              console.log("sending request to:,${process.env.REACT_APP_API_URL}/films")
       
        const response= await axios.post(`${process.env.REACT_APP_API_URL}/films`,{

            title:film.title,
            shortDescription:film.shortDescription,
            director:film.director,
            poster:film.poster,
            releaseYear:film.releaseYear,
            category:film.category,
            language:film.language,
            rating:film.rating,
        });
        toast.success(response.data.message);

        setFilm({
                title:"",
                shortDescription:"",
                director:"",
                poster:"",
                releaseYear:"",
                category:"",
                language:"",
                rating:"",
        })
       }
       catch(error)
       {
console.error("Axios Error:",error)
       }
     }

  return (
<div>
<Link to='/'><Button 
       title="Back" 
       variant="primary"
      /></Link>
    <h1 className='addFilm-heading'> AddFilm</h1>
    <div   className='add-film-form'>
       <Input
       label="Title"
       value={film.title}
       setValue={(val)=>{setFilm({ ...film,title: val})}}
       placeholder={"Enter Title"}
      
       />
       <Input
       label="Short Description"
       value={film.shortDescription}
       setValue={(val)=>{setFilm({ ...film,shortDescription: val})}}
       placeholder={"Enter Short Description"}
      
       />

<Input
       label="Director"
       value={film.director}
       setValue={(val)=>{setFilm({ ...film,director: val})}}
       placeholder={"Enter Director"}
      
       />

<Input
       label="poster"
       value={film.poster}
       setValue={(val)=>{setFilm({ ...film,poster: val})}}
       placeholder={"Enter  poster"}
      
       />

<Input
       label="releaseYear"
       value={film.releaseYear}
       setValue={(val)=>{setFilm({ ...film,releaseYear: val})}}
       placeholder={"Enter releaseYear"}
      
       />

<Input
       label="category"
       value={film.category}
       setValue={(val)=>{setFilm({ ...film,category: val})}}
       placeholder={"Enter category"}
      
       />


<Input
       label="language"
       value={film.language}
       setValue={(val)=>{setFilm({ ...film,language: val})}}
       placeholder={"Enter  language"}
      
       />


<Input
       label="rating"
       value={film.rating}
       setValue={(val)=>{setFilm({ ...film,rating: val})}}
       placeholder={"Enter rating"}
      
       />

       
       <div  className='add-btn'>
       <Button 
       title="Add Film" 
       onClick={()=>{addFilm()}}
       variant="primary"
      />

       </div>
      


    </div>

</div>



  )
}

export default AddFilm