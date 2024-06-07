import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRecommend } from "../../features/movies/movieSlice";
import "./Recommends.css";

const Recommends = () => {
  const movies = useSelector(selectRecommend);
  console.log(movies, ":🛢️");
  return (
    <div className="recommends__container">
      <h4>Recommended for You</h4>
      <div className="recommends__content">
        {movies &&
          movies.map((movie, key) => (
            <div className="recommends__item" key={key}>
              {movie.id}
              <Link to={'/detail/' + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Recommends;
