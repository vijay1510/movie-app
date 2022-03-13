import React, { useEffect } from "react";
import { getAllMovies } from "../Redux/Action";
import { useDispatch, useSelector } from "react-redux";

function ALLMovies() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  return (
    <>
      <div>ALLMovies</div>;<div>ALLMovies</div>;<div>ALLMovies</div>;
      <div>ALLMovies</div>;<div>ALLMovies</div>;<div>ALLMovies</div>;
    </>
  );
}

export default ALLMovies;
