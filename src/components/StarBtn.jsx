/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AppContext } from "../context/AppProvider";
import ACTIONS from "../context/Actions";

const StarBtn = ({ card }) => {
    const id =card.id
    const isStarred=card.isStarred??false
    const { appData:{moviesData}, dispatchApp } = useContext(AppContext)

    const handleToggleStarred = (e) => {
        e.stopPropagation()
        const data = moviesData.map(ele => Number(ele.id) === Number(id) ? {...ele,isStarred : !isStarred} : ele)
        dispatchApp({ type: ACTIONS.UPDATE_APP_DATA,payload:data })
    }
    return (
        <button type="button" onClick={handleToggleStarred} className="px-4 py-2 text-white rounded-md bg-stone-800 hover:bg-stone-700">{!isStarred?'Star':'Unstar'}</button>
    );
};

export default StarBtn;