import "../styles/globals.css";
import { useEffect, useState } from "react";
import Movie from "./components/Movie";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function MyApp({ Component, pageProps }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch(FEATURED_API);
    const movies = await response.json();
    setMovies(movies.results);
    console.log(movies);
  };

  return (
    <>
      <header>
        <input type="text" placeholder="Search" className="text" />
      </header>
      <div className="movie-container" style={{ color: "#ccc" }}>
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </>
  );
}

export default MyApp;
