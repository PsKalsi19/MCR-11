

/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AppContext } from "../context/AppProvider";
import ACTIONS from "../context/Actions";

const WatchlistBtn = ({ card }) => {
    const id =card.id
    const watchlisted=card.watchlisted??false
    const { appData:{moviesData}, dispatchApp } = useContext(AppContext)

    const handleToggleStarred = (e) => {
        e.stopPropagation()
        const data = moviesData.map(ele => Number(ele.id) === Number(id) ? {...ele,watchlisted : !watchlisted} : ele)
        dispatchApp({ type: ACTIONS.UPDATE_APP_DATA,payload:data })
    }
    return (
        <button type="button" onClick={handleToggleStarred} className="px-4 py-2 text-white rounded-md bg-stone-800 hover:bg-stone-700">{!watchlisted?'Add to Watchlist':'Watchlisted'}</button>
    );
};

export default WatchlistBtn;