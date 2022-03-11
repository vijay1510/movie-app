const initialState = {
  trending: {},
  count: 0,
  movieDetails: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_TRENDING": {
      const trendingData = action.payload;
      return {
        ...state,
        trending: trendingData,
      };
    }
    case "MOVIE_DETAILS": {
      const movieData = action.payload;
      return {
        ...state,
        movieDetails: movieData,
      };
    }

    default:
      return state;
  }
};
