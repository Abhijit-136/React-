import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
    const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
    const favorite = isFavorite(movie.id);

    function onFavoriteClick(e) {
        e.preventDefault();
        if (favorite) removeFromFavorites(movie.id);
        else addToFavorites(movie);
    }

    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
            <div className="relative">
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-80 object-cover"
                />
                <div className="absolute top-2 right-2">
                    <button
                        className={`p-2 rounded-full bg-black bg-opacity-50 text-white transition-transform transform hover:scale-125 ${favorite ? "text-red-500" : "text-gray-300"}`}
                        onClick={onFavoriteClick}
                    >
                        ♥
                    </button>
                </div>
            </div>
            <div className="p-4 text-white text-center">
                <h3 className="text-lg font-semibold">{movie.title}</h3>
                <p className="text-gray-400">{movie.release_date?.split("-")[0]}</p>
            </div>
        </div>
    );
}

export default MovieCard;
