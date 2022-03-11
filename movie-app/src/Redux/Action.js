//trending-movies
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

//movie details
export const movieDetails = (id) => {
  return async (dispatch, getState) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    const movieDataJson = await data.json();
    console.log(movieDataJson);
    dispatch(movieData(movieDataJson));
  };
};

export const movieData = (data) => {
  return {
    type: "MOVIE_DETAILS",
    payload: data,
  };
};
//---------------------------------------------------------------------------------------------------------------------------
