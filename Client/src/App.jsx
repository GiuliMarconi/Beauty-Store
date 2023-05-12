import './App.css'
import {List} from './pages/list'
import {Home} from './pages/home'
import {HomeAdmin} from './pages/homeAdmin'
import {Route, Routes} from 'react-router-dom'
import { NotFoundPage } from './pages/notFoundPage'
import {AppContextProvider} from './context/AppProvider'

function App() {
  return (
    <AppContextProvider>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Admin' element={<HomeAdmin/>}></Route>
        <Route path='/list' element={<List/>}></Route>
        <Route path='/edit/:id' element={<List/>}></Route>
        <Route path='*' element={<NotFoundPage/>}></Route>
      </Routes>
    </AppContextProvider>
  )
}

export default App
