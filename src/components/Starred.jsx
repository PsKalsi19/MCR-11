import { useContext } from "react";
import { AppContext } from "../context/AppProvider";
import MovieCard from "./MovieCard";

const Starred = () => {
    const { appData: { moviesData } } = useContext(AppContext)

    return (
        <div className="mx-16 mt-24">
            <h3 className="text-2xl font-extrabold text-gray-900">Starred Movies</h3>
            <div className="grid grid-cols-4 gap-8">
                {
                    moviesData.filter(ele=>ele.isStarred).map(card=><MovieCard key={card.id} card={card} />)
                }
            </div>
        </div>
    );
};

export default Starred;