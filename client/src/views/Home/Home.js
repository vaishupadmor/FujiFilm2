import React,{useState ,useEffect} from 'react'
import './Home.css'
import axios from 'axios'
import toast,{Toaster} from "react-hot-toast"
import FilmCard from '../../components/FilmCard/FilmCard'

function Home() {
    const [films,setFilms] =useState([])
    const loadFilms=async ()=>{
        try{
    const response =await axios.get(`http://localhost:5000/films`)
    setFilms(response.data.data);
    toast.success("Films loaded successfully")
        }catch(error){
            toast.error(error?.response?.data?.message || error.message);
        }
}
    useEffect(()=>{
        loadFilms()
    },[])
    return (
    <div>
        <h1> HOme</h1>
        {films.map((film, index)=>{
            const {
                category,
                director,
                language,
                title,
                poster,
                rating,
                releaseYear,
                shortDescription,
                _id,
            }=film;
            return <FilmCard 
            key={index}
             _id={_id}
             category={category}
             director={director}
             language={language}
             title={title}
             poster={poster}
             rating={rating}
             releaseYear={releaseYear}
             shortDescription={shortDescription}
             />
        })}
        <Toaster/>
    </div>
  )
}

export default Home