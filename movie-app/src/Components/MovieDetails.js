import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTrailer } from "../Redux/Action";
import Button from "@mui/material/Button";

function MovieDetails() {
  const { details } = useParams();
  const movieDetail = useSelector((state) => state.movieDetails);
  const results = useSelector((state) => state.trailer);
  const random = Math.floor(Math.random() * results.length);

  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch(movieDetails(details));
    dispatch(getTrailer(details));
  }, [dispatch, details]);

  return (
    <>
      <div className='details'>
        <img
          className='details_img'
          src={`https://image.tmdb.org/t/p/w500${movieDetail.backdrop_path}`}
          alt={movieDetail.title}
        />
        <h1>{movieDetail.title || movieDetail.name}</h1>
        <p className='details_plot'>{movieDetail.overview}</p>
        <Button className='details_btn' variant='contained' color='error'>
          <a
            className='details_link'
            href={`https://www.youtube.com/watch?v=${results[random]?.key}`}
            target='_blank'
            rel='noreferrer'>
            WATCH TRAILER
          </a>
        </Button>
      </div>
    </>
  );
}

export default MovieDetails;
