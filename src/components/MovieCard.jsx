import { Link } from "react-router-dom";

const MovieCard = ({ card }) => {
    const { id, title, year, genre, rating, director, writer, cast, summary, imageURL } = card
    return (
        <Link to={`/details/${id}`} className="flex flex-col shadow-md rounded-md">
            <img className="h-80" src={imageURL} alt={title} />
                <h3 className="text-gray-900 my-2 text-center px-2 text-2xl font-extrabold">{title}</h3>
            <div className="px-2 space-y-2 text-center">
                <p className="text-sm line-clamp-3 font-semibold text-gray-900 w-full">{summary}</p>
                <div className="flex p-3 flex-row justify-between">
                    <button className="bg-stone-800 px-4 py-2 rounded-md hover:bg-stone-700 text-white">Star</button>
                    <button className="bg-stone-800 px-4 py-2 rounded-md hover:bg-stone-700 text-white">Add to Watchlist</button>
                </div>
            </div>
        </Link>
    );
};

export default MovieCard;