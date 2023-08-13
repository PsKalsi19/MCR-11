
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AppLayout from './laylout/AppLayout'
import Dashboard from './components/Dashboard'
import Watchlist from './components/Watchlist'
import Starred from './components/Starred'
import Details from './components/Details'
import AddMovie from './components/AddMovie'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='watchlist' element={<Watchlist />} />
        <Route path='starred' element={<Starred />} />
        <Route path='details/:id' element={<Details />} />
        <Route path='add-movie' element={<AddMovie/>} />
      </Route>
    </Routes>
  )
}