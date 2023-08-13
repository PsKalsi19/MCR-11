import { useContext } from "react";
import { AppContext } from "../context/AppProvider";
import MovieCard from "./MovieCard";

const Watchlist = () => {
    const { appData: { moviesData } } = useContext(AppContext)

    const watchlistedData = moviesData.filter(ele => ele.watchlisted)
    return (
        <div className="mx-16 mt-24">
            <h3 className="text-2xl font-extrabold text-gray-900">Starred Movies</h3>
            <div className="grid grid-cols-4 gap-8">
                {
                    watchlistedData && watchlistedData.length > 0 && watchlistedData.map(card => <MovieCard key={card.id} card={card} />)
                }
                {
                    watchlistedData.length === 0 && <h3 className="text-2xl font-extrabold text-gray-900">Please add movies to your watchlist.</h3>
                }
            </div>
        </div>
    );
};

export default Watchlist;