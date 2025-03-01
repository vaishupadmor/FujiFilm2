import React,{useEffect, useState} from 'react'
import "./EditFilm.css"
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import toast,{Toaster} from 'react-hot-toast';
function EditFilm() {
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
        const {id} =useParams();

        const loadFilmDetails =async()=>{
            if(!id) return;
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/films/${id}`)
            console.log(response.data.data);
            setFilm(response.data.data);
        }

        useEffect(()=>{
        loadFilmDetails();
        },[])

        const updateFilm = async()=>{
const response =await axios.put(`${process.env.REACT_APP_API_URL}/films/${id}`,{
            title:film.title,
            shortDescription:film.shortDescription,
            director:film.director,
            poster:film.poster,
            releaseYear:film.releaseYear,
            category:film.category,
            language:film.language,
            rating:film.rating,
})

toast.success(response.data.message);


        }
  return (
    <div>
        <h1 className='Edit-page-heading'>EditFilm</h1>
        
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

<div  className='update-btn'>
       <Button 
       title="update Film" 
       onClick={()=>{updateFilm()}}
       variant="primary"/>
       </div>


    </div>
    <Toaster/>
    </div>
  )
}

export default EditFilm