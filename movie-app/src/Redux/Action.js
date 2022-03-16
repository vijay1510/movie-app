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

export const movieDetails = (data) => {
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
    const tvTrailer =
      !movieTrailer &&
      (await fetch(
        `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      ));

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

//allTV

export const getAllTv = () => {
  return async (dispatch, getState) => {
    const tv = await fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
    );
    const tvsJson = await tv.json();

    dispatch(allTvs(tvsJson));
  };
};

export const allTvs = (data) => {
  return {
    type: "ALL_TVS",
    payload: data,
  };
};

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

//Favourites

export const addToFavourite = (data) => {
  return {
    type: "ADD_TO_FAVOURITE",
    payload: data,
  };
};

export const removeAllFromFavourite = () => {
  return {
    type: "REMOVE_ALL_FROM_FAVOURITE",
  };
};

//------------------------------------------------------------------------------------------------------------------------------------------------------
//Search by movies/tv

export const getSearchMovie = (value) => {
  //"https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=batman&page=1&include_adult=false";

  return async (dispatch, getState) => {
    const mSearch = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${value}&page=1&include_adult=false`
    );
    const searchMovieJson = await mSearch.json();
    console.log({ searchMovieJson });

    dispatch(movieSearch(searchMovieJson));
  };
};

export const movieSearch = (data) => {
  return {
    type: "SEARCH_BY_MOVIE",
    payload: data,
  };
};
//---------------------------
//TV

export const getSearchTv = (value) => {
  //"https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=batman&page=1&include_adult=false";

  return async (dispatch, getState) => {
    const tSearch = await fetch(
      `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${value}&page=1&include_adult=false`
    );
    const searchTvJson = await tSearch.json();
    console.log({ searchTvJson });
    dispatch(tvSearch(searchTvJson));
  };
};

export const tvSearch = (data) => {
  return {
    type: "SEARCH_BY_TV",
    payload: data,
  };
};
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
