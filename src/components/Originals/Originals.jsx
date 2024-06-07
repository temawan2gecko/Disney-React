import React from 'react'
import './Originals.css'
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectOriginal } from "../../features/movies/movieSlice";

const Originals = () => {
    const movies = useSelector(selectOriginal)
  return (
    <div className='originals__container'>
      <h4>Originals</h4>
      <div className="originals__content">
        {movies &&
          movies.map((movie, key) => (
            <div className="originals__item" key={key}>
              {movie.id}
              <Link to={'/detail/' + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Originals
