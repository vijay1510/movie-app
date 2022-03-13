import React, { useEffect } from "react";
import { getAllTv } from "../Redux/Action";
import { useDispatch, useSelector } from "react-redux";
import SingleMovie from "./SingleMovie";

function AllTvSeries() {
  const { results } = useSelector((state) => state.allTvs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTv());
  }, [dispatch]);
  return (
    <div className='size'>
      <div className='trending'>
        {results &&
          results?.map((movie) => {
            return (
              <SingleMovie
                key={movie.id}
                title={movie.title || movie.name}
                rating={movie.vote_average}
                date={movie.release_date || movie.first_air_date}
                poster={movie.poster_path}
                id={movie.id}
              />
            );
          })}
      </div>
      <h1>TMDB</h1>
    </div>
  );
}

export default AllTvSeries;
