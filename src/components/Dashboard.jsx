import { useContext } from "react";
import { AppContext } from "../context/AppProvider";
import MovieCard from './MovieCard';
import ACTIONS from "../context/Actions";

const Dashboard = () => {
    const { appData: { moviesData, searchText, selectedYear, selectedGenre, selectedRating }, dispatchApp } = useContext(AppContext)

    const filtersData = moviesData.reduce((acc, ele) => ({ years: [...acc.years, ele.year], genres: [...acc.genres, ...ele.genre], ratings: [...acc.ratings, ele.rating] }), {
        years: [],
        genres: [],
        ratings: []
    })

    const handleDataFlow = () => {
        let data = moviesData
        // title,cast,director
        if (searchText !== '') {
            data = data.filter(ele => ele.title.toLowerCase().includes(searchText.toLowerCase()) || ele.director.toLowerCase().includes(searchText.toLowerCase()) || ele.cast.some(actors => actors.toLowerCase().includes(searchText.toLowerCase())))
        }
        if (selectedGenre !== 'All') {
            data = data.filter(ele => ele.genre.some(category => category.includes(selectedGenre)))
        }
        if (selectedRating) {
            data = data.filter(ele => ele.rating === (+selectedRating))
        }

        if (selectedYear) {
            data = data.filter(ele => ele.year === (+selectedYear))
        }

        return data
    }

    return (
        <div className="mx-16 mt-24">

            <div className="flex flex-row justify-between mb-4">
                <h3 className="text-2xl font-extrabold text-gray-900">Movies</h3>
                <select onChange={(e) => dispatchApp({ type: ACTIONS.GENRE, payload: e.target.value })} value={selectedGenre} className="px-2 py-2 border rounded-md" name="genere">
                    <option value="All">All Genre</option>
                    {
                        filtersData?.genres && [... new Set(filtersData?.genres)].map(genre => <option key={genre} value={genre}>{genre}</option>)
                    }
                </select>
                <select onChange={(e) => dispatchApp({ type: ACTIONS.YEAR, payload: e.target.value })} value={selectedYear} className="px-2 py-2 border rounded-md" name="year">
                    <option selected disabled hidden value="">Release Year</option>
                    {
                        filtersData?.years && [... new Set(filtersData?.years)].map(year => <option key={year} value={year}>{year}</option>)
                    }
                </select>
                <select onChange={(e) => dispatchApp({ type: ACTIONS.RATING, payload: e.target.value })} value={selectedRating} className="px-2 py-2 border rounded-md" name="rating">
                    <option selected disabled hidden value="">Rating</option>
                    {
                        filtersData?.ratings && [... new Set(filtersData?.ratings)].map(rating => <option key={rating} value={rating}>{rating}</option>)
                    }
                </select>
                <button className="px-4 py-2 text-white rounded-md bg-stone-800 hover:bg-stone-700">Add a Movie</button>
            </div>
            <div className="grid grid-cols-2 gap-16 lg:grid-cols-4">
                {
                    moviesData && moviesData.length > 0 && handleDataFlow().map(card => <MovieCard key={card.id} card={card} />)
                }
            </div>
        </div>
    );
};

export default Dashboard;