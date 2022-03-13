import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import TrendingList from "./Components/TrendingList";
import MovieDetails from "./Components/MovieDetails";

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
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
