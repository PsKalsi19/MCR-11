/* eslint-disable react/prop-types */
import {  useNavigate } from "react-router-dom";
import StarBtn from "./StarBtn";
import WatchlistBtn from "./WatchlistBtn";

const MovieCard = ({ card }) => {
    const { id, title, summary, imageURL } = card
const navigate=useNavigate()
    const handleRedirect=()=>{
        navigate(`/details/${id}`)
    }
    return (
        <div onClick={handleRedirect}  className="flex flex-col rounded-md shadow-md cursor-pointer">
            <img className="h-80" src={imageURL} alt={title} />
                <h3 className="px-2 my-2 text-2xl font-extrabold text-center text-gray-900">{title}</h3>
            <div className="px-2 space-y-2 text-center">
                <p className="w-full text-sm font-semibold text-gray-900 line-clamp-3">{summary}</p>
                <div className="flex flex-row justify-between p-3">
                    <StarBtn card={card}/>
                    <WatchlistBtn card={card} />
                </div>
            </div>
        </div>
    );
};

export default MovieCard;