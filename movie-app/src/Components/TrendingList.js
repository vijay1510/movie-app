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
    <>
      {results &&
        results.map((movie) => {
          return <SingleMovie />;
        })}
    </>
  );
}

export default TrendingList;
