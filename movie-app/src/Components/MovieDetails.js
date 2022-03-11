import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { movieDetails } from "../Redux/Action";

function MovieDetails() {
  const { details } = useParams();

  const movieDetail = useSelector((state) => state.movieDetails);
  const dispatch = useDispatch();

  console.log(movieDetail);

  useEffect(() => {
    dispatch(movieDetails(details));
  }, [dispatch, details]);

  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w400${movieDetail.backdrop_path}`}
        alt={movieDetail.title}
      />
      <h1>{movieDetail.title || movieDetail.name}</h1>
      <p>{movieDetail.overview}</p>
    </>
  );
}

export default MovieDetails;
