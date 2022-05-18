import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { movieFromServer } from "../api";
import './MovieList.css';
import { BeatLoader } from "react-spinners";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const { date } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    movieFromServer(date).then(setMovies);
    setLoading(false);
  }, [date])

  return (
    <div className="movie_page">
      <div className="header">
        <button
          className="header__button_back"
          onClick={() => navigate('/')}
        >
          &#60;
        </button>

        <h1 className="header__title">Super film</h1>
      </div>

      <div className="loading">
        <BeatLoader color="gray" loading={loading} />
      </div>

      <ul className="list">
        {movies.map(movie => (
          <li
            className="list__item"
            key={movie.id}
          >
            <a
              href={movie.show.image?.original}
              className="list__img"
            >
              <img
                className="list__img"
                src={movie.show.image?.medium}
                alt={movie.name}
              />
            </a>

            <div className="description">
              <div className="title">
                <p className="title__item">{movie.name}</p>
                <p className="title__item title__item-year">{movie.airdate.slice(0, 4)}</p>
              </div>

              <div className="show">
                <p className="show__item">Season: {movie.season}</p>
                <p className="show__item">Episode: {movie.number}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
};