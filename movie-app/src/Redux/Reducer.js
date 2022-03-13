const initialState = {
  trending: {},
  allMovies: {},
  allTvs: {},
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
      const trendingMovies =
        state.trending.results &&
        state.trending.results.find((e) => e.id === Number(ids));
      const allMovie =
        state.allMovies.results &&
        state.allMovies.results.find((e) => e.id === Number(ids));
      const allTv =
        state.allTvs.results &&
        state.allTvs.results.find((e) => e.id === Number(ids));
      console.log(trendingMovies, allMovie);

      return {
        ...state,
        movieDetails: trendingMovies || allMovie || allTv,
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
      console.log({ moviesData });
      return {
        ...state,
        allMovies: moviesData,
      };
    }
    case "ALL_TVS": {
      const tvsData = action.payload;
      console.log({ tvsData });
      return {
        ...state,
        allTvs: tvsData,
      };
    }

    default:
      return state;
  }
};
