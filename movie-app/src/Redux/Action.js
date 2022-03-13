//get trending-movies
export const trendingMovies = () => {
  return async (dispatch, getState) => {
    const trending = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
    );
    const trendingJson = await trending.json();

    dispatch(allTrending(trendingJson));
  };
};

export const allTrending = (data) => {
  return {
    type: "ALL_TRENDING",
    payload: data,
  };
};
//-----------------------------------------------------------------------------------------------------------------

// get movie details
// export const movieDetails = (id) => {
//   return async (dispatch, getState) => {
//     const data = await fetch(
//       `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
//     );
//     const movieDataJson = await data.json();
//     console.log(movieDataJson);
//     dispatch(movieData(movieDataJson));
//   };
// };

export const movieData = (data) => {
  return {
    type: "MOVIE_DETAILS",
    payload: data,
  };
};

//---------------------------------------------------------------------------------------------------------------------------

//get trailer

export const getTrailer = (id) => {
  return async (dispatch, getState) => {
    const movieTrailer = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    const trailerJson = movieTrailer && (await movieTrailer.json());
    const tvTrailer = await fetch(
      `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    //https://api.themoviedb.org/3/tv/155493/videos?api_key=7381b55882ca1499d0d4de2c63bc9ed1&language=en-US

    const tvJson = tvTrailer && (await tvTrailer.json());
    dispatch(Trailer(trailerJson.results || tvJson.results));
  };
};

export const Trailer = (data) => {
  return {
    type: "MOVIE_TRAILER",
    payload: data,
  };
};
//-------------------------------------------------------------------------------------------------------------------------------

//allmovies
export const getAllMovies = () => {
  return async (dispatch, getState) => {
    const movies = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
    );
    const moviesJson = await movies.json();

    dispatch(allMovies(moviesJson));
  };
};

export const allMovies = (data) => {
  return {
    type: "ALL_MOVIES",
    payload: data,
  };
};

//---------------------------------------------------------------------------------------------------------------------------------------------
