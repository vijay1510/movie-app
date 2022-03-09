import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import TrendingList from "./Components/TrendingList";

function App() {
  return (
    <div className='App'>
      <Header />
      <h1 className='app-h1'>Trending......</h1>
      <TrendingList />

      <Footer />
    </div>
  );
}

export default App;
