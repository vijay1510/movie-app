import React from "react";
import { useSelector } from "react-redux";
import SingleMovie from "./SingleMovie";

function ALLFavorites() {
  const results = useSelector((state) => state.favourites);

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
    </div>
  );
}

export default ALLFavorites;
