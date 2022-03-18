const initialState = {
  trending: {},
  allMovies: {},
  allTvs: {},
  movieDetails: {},
  trailer: {},
  favourites: [],
  moviesortv: {},
  cast: {},
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

      const allMoviesorTv =
        state.moviesortv.results &&
        state.moviesortv.results.find((e) => e.id === Number(ids));

      return {
        ...state,
        movieDetails: trendingMovies || allMovie || allTv || allMoviesorTv,
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
    case "ALL_TVS": {
      const tvsData = action.payload;
      return {
        ...state,
        allTvs: tvsData,
      };
    }

    case "ADD_TO_FAVOURITE": {
      const addId = action.payload;
      const favMovie =
        state.trending.results.find((e) => e.id === addId) ||
        state.allMovies.results.find((e) => e.id === addId) ||
        state.allTvs.results.find((e) => e.id === addId) ||
        state.moviesortv.results.find((e) => e.id === addId);
      const isAvailable = state.favourites.find((e) => e.id === addId);
      if (isAvailable) {
        return {
          ...state,
          favourites: state.favourites.filter((e) => e.id !== addId),
        };
      }

      return {
        ...state,
        favourites: [...state.favourites, favMovie],
      };
    }
    case "REMOVE_ALL_FROM_FAVOURITE": {
      return {
        ...state,
        favourites: [],
      };
    }
    case "SEARCH_BY_MOVIE": {
      return {
        ...state,
        moviesortv: action.payload,
      };
    }
    case "SEARCH_BY_TV": {
      return {
        ...state,
        moviesortv: action.payload,
      };
    }
    case "NO_SEARCH": {
      return {
        ...state,
        moviesortv: {},
      };
    }
    case "ALL_CAST": {
      return {
        ...state,
        cast: action.payload,
      };
    }

    default:
      return state;
  }
};
