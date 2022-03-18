import React, { useState } from "react";
import { getSearchMovie, getSearchTv } from "../Redux/Action";
import { useDispatch, useSelector } from "react-redux";
import SingleMovie from "./SingleMovie";

export default function Search() {
  const [value, setValue] = useState("");
  const { results } = useSelector((state) => state.moviesortv);

  const dispatch = useDispatch();

  return (
    <>
      <div className='container'>
        <input
          className='search'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className='search-topic'>
          <p onClick={() => value !== "" && dispatch(getSearchMovie(value))}>
            Search by movies
          </p>
          <p onClick={() => value !== "" && dispatch(getSearchTv(value))}>
            Search by Tv
          </p>
        </div>
      </div>

      <div className='size'>
        <div className='trending'>
          {results &&
            results.map((movie) => {
              return (
                <SingleMovie
                  key={movie.id}
                  title={movie.title || movie.name}
                  rating={movie.vote_average}
                  date={movie.release_date || movie.first_air_date}
                  poster={movie.poster_path}
                  id={movie.id}
                  media={movie.media_type}
                />
              );
            })}
        </div>

        <h1 style={{ opacity: 0 }}>TMDB</h1>
      </div>
    </>
  );
}
