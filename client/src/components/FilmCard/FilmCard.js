import React from 'react';
import "./FilmCard.css";
import ImgStar from "./../../assets/star.png"
import ImgDirector from "./../../assets/director.png"
import ImgCalender from "./../../assets/calendar.png"
import ImgLanguage from "./../../assets/language.png"
import ImgCategory from "./../../assets/category.png"
import Button from '../Button/Button';
import axios from 'axios';
import toast,{Toaster} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function FilmCard({
    category,
    director,
    language,
    title,
    poster,
    rating,
    releaseYear,
    shortDescription,
    _id,
}) {
  const navigate=useNavigate();
  

  const deleteFilm=async ()=>{
    const response=await axios.delete(`${process.env.REACT_APP_API_URL}/films/${_id}`);
    toast.success(response.data.message);
    window.location.reload();
  };
    return (
    <div className='film-card'>
      <div>
      <img src={poster} alt={title} className='film-card-poster'/>
      </div>
      <div className='film-card-info'>
        <h1>{title}</h1>
        <div className='film-card-info-details'>
        
          <span className='director'> 
            <img src={ImgDirector} alt='director' className='film-info-icon'/>{director}
            </span>
          <span className='release-year'> 
            <img src={ImgCalender} alt='releaseyear' className='film-info-icon'/>
             {releaseYear}</span>
          </div>

          <div className='film-card-info-details'>
        
          <span className='director'> 
            <img src={ImgLanguage} alt='director' className='film-info-icon'/>{language}
            </span>
          <span className='release-year'> 
            <img src={ImgCategory} alt='releaseyear' className='film-info-icon'/>
             {category}</span>
          </div>
         
        <p>{shortDescription}</p>
        <div className='film-rating'>
          <img src={ImgStar}  className='film-info-icon' />{rating}
        </div>
        </div>
        <div className='film-card-delete'>
        <Button 
        title={"Edit"}
        onClick={()=>{navigate(`/film/edit/${_id}`)}}/>
        <Button 
        title={"Delete"}
        onClick={()=>{deleteFilm()}}/>
        </div>
        <Toaster/>
    </div>
  )
}

export default FilmCard