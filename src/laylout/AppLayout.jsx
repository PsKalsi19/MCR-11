
import { Outlet } from 'react-router-dom';
import Navbar from './../components/Navbar';
const AppLayout = () => {
    return (
        <div className='flex gap-16 flex-col'>
           <Navbar/> 
           <div><Outlet/></div>
        </div>
    );
};

export default AppLayout;