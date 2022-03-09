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
