import "../styles/globals.css";
import Movie from "./components/Movie";

function MyApp({ Component, pageProps }) {
  const movies = ["1", "2", "3"];

  return <div style={{color: '#ccc'}}>
    {movies.map(movie => (
     <Movie/> 
    ))}
  </div>
}

export default MyApp;
