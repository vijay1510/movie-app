import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { trendingMovies } from "../Redux/Action";
import SingleMovie from "./SingleMovie";

function TrendingList() {
  const { results } = useSelector((state) => state.trending);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(trendingMovies());
  }, [dispatch]);

  return (
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
      <h1>heloo</h1>
    </div>
  );
}

export default TrendingList;
