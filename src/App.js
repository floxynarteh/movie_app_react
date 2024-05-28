import { useEffect } from "react";
import "./App.css";
import { CiSearch } from "react-icons/ci";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=e477f8ae ";

const movie1 = {
  Title: "Superman Returns",
  Year: "2006",
  imdbID: "tt0348150",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNDUzZGRhNzktYTZkMC00YWFiLTljMDEtMTk2OWJhYzAyYmY2XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
};

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
    // return data;
  };

  useEffect(() => {
    searchMovies("Superman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value="Superman"
          onChange={() => {}}
        />
        <CiSearch />
        {/* alt="search" onClick={() => {}} */}

        <div className="container">
          <MovieCard movie1={movie1} />
        </div>
      </div>
    </div>
  );
};

export default App;
