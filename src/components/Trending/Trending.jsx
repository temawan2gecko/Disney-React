import React from 'react'
import './Trending.css'
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectTrending } from "../../features/movies/movieSlice";

const Trending = () => {
    const movies = useSelector(selectTrending);
  return (
    <div className='trending__container'>
      <h4>Trending</h4>
      <div className="trending__content">
        {movies &&
          movies.map((movie, key) => (
            <div className="trending__item" key={key}>
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

export default Trending
