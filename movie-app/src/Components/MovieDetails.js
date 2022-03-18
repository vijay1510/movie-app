import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTrailer, getCast } from "../Redux/Action";
import Button from "@mui/material/Button";
import Cast from "./Cast";

function MovieDetails() {
  const { details } = useParams();
  const movieDetail = useSelector((state) => state.movieDetails);
  const results = useSelector((state) => state.trailer);
  const { cast } = useSelector((state) => state.cast);
  const random = results && Math.floor(Math.random() * results.length);
  const mediaType = movieDetail.name ? "tv" : "movie";

  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch(movieDetails(details));
    dispatch(getTrailer(details, mediaType));
    dispatch(getCast(details, mediaType));
  }, [dispatch, details, mediaType]);

  return (
    <>
      <div className='details'>
        <img
          className='details_img'
          src={
            movieDetail.backdrop_path
              ? `https://image.tmdb.org/t/p/w500${movieDetail.backdrop_path}`
              : "https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg"
          }
          alt={movieDetail.title || movieDetail.name}
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
      <div className='details_cast'>
        {cast &&
          cast.map((e) => {
            return <Cast key={e.id} name={e.name} pic={e.profile_path} />;
          })}
      </div>
      <div>
        <h1 style={{ opacity: 0 }}>TMDB</h1>
      </div>
    </>
  );
}

export default MovieDetails;
