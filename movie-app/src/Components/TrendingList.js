import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { trendingMovies } from "../Redux/Action";
import SingleMovie from "./SingleMovie";

function TrendingList() {
  const { results } = useSelector((state) => state.trending);
  console.log(typeof results);
  console.log(results);

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
                title={movie.title || movie.name}
                rating={movie.vote_average}
                date={movie.release_date || movie.first_air_date}
              />
            );
          })}
      </div>
      <h1>heloo</h1>
    </div>
  );
}

export default TrendingList;
