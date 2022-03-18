import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import TrendingList from "./Components/TrendingList";
import MovieDetails from "./Components/MovieDetails";
import ALLMovies from "./Components/ALLMovies";
import AllTvSeries from "./Components/AllTvSeries";
import ALLFavorites from "./Components/ALLFavorites";
import Search from "./Components/Search";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { removeAllFromFavourite } from "./Redux/Action";

function App() {
  const results = useSelector((state) => state.favourites);
  const dispatch = useDispatch();
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <h1 className='app-h1'>DISCOVER TRENDING</h1>
          <TrendingList />
        </Route>
        <Route exact path='/movie/:details'>
          <MovieDetails />
        </Route>
        <Route exact path='/movies'>
          <h1 className='app-h1'>DISCOVER MOVIES</h1>
          <ALLMovies />
        </Route>
        <Route exact path='/tv-series'>
          <h1 className='app-h1'>DISCOVER TV</h1>
          <AllTvSeries />
        </Route>
        <Route exact path='/Favorites'>
          <h1 className='app-h1'>DISCOVER FAVOURITES</h1>
          {results.length !== 0 && (
            <div className='app_button'>
              <Button
                variant='outlined'
                color='error'
                onClick={() => dispatch(removeAllFromFavourite())}>
                REMOVE ALL
              </Button>
            </div>
          )}
          <ALLFavorites />
        </Route>
        <Route exact path='/search'>
          <h1 className='app-h1'>DISCOVER BY SEARCH</h1>
          <Search />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
