import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppProvider";

const Details = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState()
    // const { title, year, genre, rating, director, writer, cast, summary, imageURL } = movie
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
                <div className="flex gap-8 bg-white shadow-md rounded-md p-8 flex-row">
                    <div className="w-3/12">
                        <img src={movie.imageURL} alt={movie.title} />
                    </div>
                    <div className="w-7/12 flex justify-between flex-col">
                        <div className="space-y-4">
                            <h3 className="text-gray-900 text-4xl font-extrabold">{movie.title}</h3>
                            <p className="text-gray-900 font-semibold">{movie.summary}</p>
                            <p className="text-gray-900 font-semibold">Year: <span className="mx-1">{movie.year}</span></p>
                            <p className="text-gray-900 font-semibold">Genre: <span className="mx-1">{movie.genre.toString().split(',').join(', ')}</span></p>
                            <p className="text-gray-900 font-semibold">Rating: <span className="mx-1">{movie.rating}</span></p>
                            <p className="text-gray-900 font-semibold">Director: <span className="mx-1">{movie.director}</span></p>
                            <p className="text-gray-900 font-semibold">Writer: <span className="mx-1">{movie.writer}</span></p>
                            <p className="text-gray-900 font-semibold">Cast: <span className="mx-1">{movie.cast.toString().split(',').join(', ')}</span></p>
                        </div>
                        <div className="flex flex-row justify-between">
                            <button className="bg-stone-800 px-4 py-2 rounded-md hover:bg-stone-700 text-white">Star</button>
                            <button className="bg-stone-800 px-4 py-2 rounded-md hover:bg-stone-700 text-white">Add to Watchlist</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Details;