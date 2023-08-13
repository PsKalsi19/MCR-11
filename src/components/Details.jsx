import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppProvider";
import StarBtn from "./StarBtn";
import WatchlistBtn from "./WatchlistBtn";

const Details = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState()
    const { appData: { moviesData } } = useContext(AppContext)
    useEffect(() => {
        if (id) {
            setMovie(moviesData.find(ele => Number(ele.id) === Number(id)))
        }
    }, [id, moviesData])
    return (
        <div className="my-32 mx-28">
            {
                movie && Object.keys(movie).length > 0 && 
                <div className="flex flex-row gap-8 p-8 bg-white rounded-md shadow-md">
                    <div className="w-3/12">
                        <img src={movie.imageURL} alt={movie.title} />
                    </div>
                    <div className="flex flex-col justify-between w-7/12">
                        <div className="space-y-4">
                            <h3 className="text-4xl font-extrabold text-gray-900">{movie.title}</h3>
                            <p className="font-semibold text-gray-900">{movie.summary}</p>
                            <p className="font-semibold text-gray-900">Year: <span className="mx-1">{movie.year}</span></p>
                            <p className="font-semibold text-gray-900">Genre: <span className="mx-1">{movie.genre.toString().split(',').join(', ')}</span></p>
                            <p className="font-semibold text-gray-900">Rating: <span className="mx-1">{movie.rating}</span></p>
                            <p className="font-semibold text-gray-900">Director: <span className="mx-1">{movie.director}</span></p>
                            <p className="font-semibold text-gray-900">Writer: <span className="mx-1">{movie.writer}</span></p>
                            <p className="font-semibold text-gray-900">Cast: <span className="mx-1">{movie.cast.toString().split(',').join(', ')}</span></p>
                        </div>
                        <div className="flex flex-row justify-between">
                            <StarBtn card={movie}/>
                            <WatchlistBtn card={movie} />
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Details;