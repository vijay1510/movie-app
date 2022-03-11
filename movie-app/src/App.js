import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import TrendingList from "./Components/TrendingList";
import MovieDetails from "./Components/MovieDetails";

const details = "the- ba";

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Header />
          <h1 className='app-h1'>Trending......</h1>
          <TrendingList />
          <Footer />
        </Route>
        <Route exact path='/movie/:details'>
          <MovieDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
