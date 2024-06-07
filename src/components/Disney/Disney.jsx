import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectNewDisney } from "../../features/movies/movieSlice";
import './Disney.css'

const Disney = () => {
  const movies = useSelector(selectNewDisney);
  return (
    <div className="newDisney__container">
      <h4>New to Disney+</h4>
      <div className="newDisney__content">
        {movies &&
          movies.map((movie, key) => (
            <div className="newDisney__item" key={key}>
              {movie.id}
              <Link to={`/detail/${movie.id}`}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Disney;
