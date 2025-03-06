import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="bg-gray-900 p-4 shadow-lg flex justify-between items-center fixed top-0 w-full z-50 border-b border-gray-700">
            <div className="text-2xl font-bold text-white tracking-wide hover:text-blue-500 transition duration-300">
                <Link to="/">Movie App</Link>
            </div>
            <div className="flex space-x-6">
                <Link to="/" className="text-white text-lg hover:text-blue-500 transition duration-300 transform hover:scale-110">
                    Home
                </Link>
                <Link to="/favorites" className="text-white text-lg hover:text-blue-500 transition duration-300 transform hover:scale-110">
                    Favorites
                </Link>
            </div>
        </nav>
    );
}

export default NavBar;