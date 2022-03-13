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
          <h1 className='app-h1'>TRENDING......</h1>
          <TrendingList />
        </Route>
        <Route exact path='/movie/:details'>
          <MovieDetails />
        </Route>
        <Route exact path='/movies'>
          <h1 className='app-h1'>All-MOVIES......</h1>
          <ALLMovies />
        </Route>
        <Route exact path='/tv-series'>
          <h1 className='app-h1'>ALL-TV......</h1>
          <AllTvSeries />
        </Route>
        <Route exact path='/Favorites'>
          <h1 className='app-h1'>FAVORITES......</h1>
          <ALLFavorites />
        </Route>
        <Route exact path='/search'>
          <h1 className='app-h1'>SEARCH......</h1>
          <Search />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
