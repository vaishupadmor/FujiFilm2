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
        <h1>{title}</h1>
    </div>
  )
}

export default FilmCard