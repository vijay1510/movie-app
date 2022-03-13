import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { movieData, getTrailer } from "../Redux/Action";

function MovieDetails() {
  const { details } = useParams();
  const movieDetail = useSelector((state) => state.movieDetails);
  const results = useSelector((state) => state.trailer);
  const random = Math.floor(Math.random() * results.length);
  console.log(details, results[0]?.key);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieData(details));
    dispatch(getTrailer(details));
  }, [dispatch, details]);

  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetail.backdrop_path}`}
        alt={movieDetail.title}
      />
      <h1>{movieDetail.title || movieDetail.name}</h1>
      <p>{movieDetail.overview}</p>
      <button>
        <a
          href={`https://www.youtube.com/watch?v=${results[random]?.key}`}
          target='_blank'
          rel='noreferrer'>
          WATCH TRAILER
        </a>
      </button>
    </>
  );
}

export default MovieDetails;
