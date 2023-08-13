/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from "react";
import { getMoviesData, setMoviesData } from "../utils/localstorage-utils";
import ACTIONS from "./Actions";
import { movies } from "../db/data";

const appReducer = (state, { type, payload }) => {
    switch (type) {
        case ACTIONS.UPDATE_APP_DATA:
            setMoviesData(payload)
            return { ...state, moviesData: payload };
        case ACTIONS.SEARCH:
            return { ...state, searchText: payload };
        case ACTIONS.GENRE:
            return { ...state, selectedGenre: payload };
        case ACTIONS.RATING:
            return { ...state, selectedRating: payload };
        case ACTIONS.YEAR:
            return { ...state, selectedYear: payload };
        default:
            return state;
    }
}

const initialState = {
    moviesData: [],
    searchText:'',
    selectedYear:null,
    selectedGenre:'All',
    selectedRating:null
}

export const AppContext = createContext()
const AppProvider = ({ children }) => {

    const [appData, dispatchApp] = useReducer(appReducer, initialState)

    useEffect(() => {
        const data = getMoviesData()
        if (data.length === 0) {
            dispatchApp({ type: ACTIONS.UPDATE_APP_DATA, payload: movies })
        }
        else {
            dispatchApp({ type: ACTIONS.UPDATE_APP_DATA, payload: data })
        }
    }, [])


    return (
        <AppContext.Provider value={{ appData, dispatchApp }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;