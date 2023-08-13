
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/AppProvider';
import ACTIONS from '../context/Actions';
const Navbar = () => {
    
    const { appData:{searchText}, dispatchApp } = useContext(AppContext)
    return (
        <nav className="fixed top-0 left-0 right-0 border-gray-200 bg-stone-800 ">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
                <Link className='text-xl font-extrabold text-white' to="/" >IMDB</Link>
                <input className='w-5/12 px-2 py-2 border rounded bg-gray-50' placeholder='Search movie by title, cast and director' onChange={(e)=>dispatchApp({type:ACTIONS.SEARCH,payload:e.target.value})} 
                value={searchText} type="search" name="seachbar" />
                <div className="w-full md:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 font-medium border rounded-lg md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:border-gray-700">
                        <li>
                            <NavLink to="/" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 " aria-current="page">Movies</NavLink>
                        </li>
                        <li>
                            <NavLink to="/watchlist" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 " aria-current="page">Watch List</NavLink>
                        </li>
                        <li>
                            <NavLink to="/starred" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 " aria-current="page">Starred Movies</NavLink>
                        </li>
                    
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;