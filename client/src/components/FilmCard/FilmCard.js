import React from 'react'
import "./FilmCard.css"
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
  return (
    <div className='film-card'>
      <div>
      <img src={poster} alt={title} className='film-card-poster'/>
      </div>
      <div className='film-card-info'>
        <h1>{title}</h1>
        <p>
          <span className='director'> Director:{director}</span>
          <span className='release-year'> Release year: {releaseYear}</span>
        </p>
        <p>{shortDescription}</p>

        </div>
    </div>
  )
}

export default FilmCard