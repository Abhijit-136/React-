import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6 pt-20">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-400 drop-shadow-lg">
        Your Favorites
      </h2>

      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      ) : (
        <div className="text-center mt-20 p-6 bg-gray-800 rounded-lg shadow-lg border border-blue-500">
          <h2 className="text-2xl font-semibold text-white mb-2">No Favorite Movies Yet</h2>
          <p className="text-gray-400">Start adding movies to your favorites and they will appear here!</p>
        </div>
      )}
    </div>
  );
}

export default Favorites;
