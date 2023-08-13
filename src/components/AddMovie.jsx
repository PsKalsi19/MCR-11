import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppProvider";
import ACTIONS from "../context/Actions";
const movieInitial = {
    title: '',
    summary: '',
    cast: '',
    year: 0,
    rating: 0,
    genre: '',
    director: '',
    writer: '',
    imageUrl: ''
}
const AddMovie = () => {
    const { appData:{moviesData}, dispatchApp } = useContext(AppContext)
    const navigate = useNavigate()
    const [movie, setMovie] = useState(movieInitial)

    const addNewMovie = (e) => {
        const defaultImgUrl = "https://source.unsplash.com/random/900x700/?movie"
        e.preventDefault()

        const finalData = [...moviesData, {
            ...movie,
            cast: [...movie.cast.split(',')],
            genre: [...movie.genre.split(',')],
            id: moviesData.length + 1,
            imageUrl: movie.imageUrl === '' ? defaultImgUrl : movie.imageUrl
        }]
        dispatchApp({ type: ACTIONS.UPDATE_APP_DATA, payload: finalData })
        navigate(-1)
        setMovie(movieInitial)
    }

    const handleChange = (e) => {
        setMovie(prevData => ({ ...prevData, [e.target.name]: e.target.value }))
    }
    return (
        <div className="w-auto mx-12 my-32">
            <form onSubmit={addNewMovie} className="flex flex-col my-4 ">
                <h3 className="text-2xl font-bold">Add Movie</h3>
                <div className="flex flex-col">
                    <label className="my-2 text-sm font-semibold tracking-normal text-gray-500" htmlFor="Title">Title:</label>
                    <input onChange={handleChange} value={movie.title} className="p-2 border rounded bg-gray-50" name="title" />
                </div>

                <div className="flex flex-col">
                    <label className="my-2 text-sm font-semibold tracking-normal text-gray-500" htmlFor="Summary">Summary:</label>
                    <textarea onChange={handleChange} value={movie.summary} className="p-2 border rounded bg-gray-50" name="summary"></textarea>

                </div>
                <div className="flex flex-col">
                    <label className="my-2 text-sm font-semibold tracking-normal text-gray-500" htmlFor="Cast">Cast:</label>
                    <input placeholder="separate cast by coma ',' " onChange={handleChange} value={movie.cast} className="p-2 border rounded bg-gray-50" name="cast" />
                </div>
                <div className="flex flex-col">
                    <label className="my-2 text-sm font-semibold tracking-normal text-gray-500" htmlFor="Year">Year:</label>
                    <input type="number" min={1900} onChange={handleChange} value={movie.year} className="p-2 border rounded bg-gray-50" name="year" />

                </div>

                <div className="flex flex-col">
                    <label className="my-2 text-sm font-semibold tracking-normal text-gray-500" htmlFor="Rating">Rating:</label>
                    <input type="number" min={1} max={10} onChange={handleChange} value={movie.rating} className="p-2 border rounded bg-gray-50" name="rating" />
                </div>
                <div className="flex flex-col">
                    <label className="my-2 text-sm font-semibold tracking-normal text-gray-500" htmlFor="Genre">Genre:</label>
                    <input placeholder="separate genres by coma ',' " onChange={handleChange} value={movie.genre} className="p-2 border rounded bg-gray-50" name="genre" />

                </div>
                <div className="flex flex-col">
                    <label className="my-2 text-sm font-semibold tracking-normal text-gray-500" htmlFor="Director">Director:</label>
                    <input onChange={handleChange} value={movie.director} className="p-2 border rounded bg-gray-50" name="director" />

                </div>
                <div className="flex flex-col">
                    <label className="my-2 text-sm font-semibold tracking-normal text-gray-500" htmlFor="Writer">Writer:</label>
                    <input onChange={handleChange} value={movie.writer} className="p-2 border rounded bg-gray-50" name="writer" />
                </div>
                <div className="flex flex-col">
                    <label className="my-2 text-sm font-semibold tracking-normal text-gray-500" htmlFor="Image URL">Image URL:</label>
                    <input onChange={handleChange} value={movie.imageUrl} className="p-2 border rounded bg-gray-50" name="imageUrl" />
                </div>

                <button type="submit" className="px-4 py-2 my-4 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700">Add movie</button>

            </form>

        </div>
    );
};

export default AddMovie;