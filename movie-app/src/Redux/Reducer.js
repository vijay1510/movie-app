const initialState = {
  trending: {},
  allMovies: {},
  allTv: {},
  movieDetails: {},
  trailer: {},
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
      const ids = action.payload;

      return {
        ...state,
        movieDetails: state.trending.results.find((e) => e.id === Number(ids)),
      };
    }
    case "MOVIE_TRAILER": {
      const trailerData = action.payload;
      return {
        ...state,
        trailer: trailerData,
      };
    }
    case "ALL_MOVIES": {
      const moviesData = action.payload;
      return {
        ...state,
        allMovies: moviesData,
      };
    }

    default:
      return state;
  }
};
