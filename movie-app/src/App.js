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

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <h1 className='app-h1'>Trending......</h1>
          <TrendingList />
        </Route>
        <Route exact path='/movie/:details'>
          <MovieDetails />
        </Route>
        <Route exact path='/movies'>
          <ALLMovies />
        </Route>
        <Route exact path='/tv-series'>
          <AllTvSeries />
        </Route>
        <Route exact path='/Favorites'>
          <ALLFavorites />
        </Route>
        <Route exact path='/search'>
          <Search />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
