import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import BrowseTeamMatches from './Components/BrowseTeamMatches'
import NotFound from './Components/NotFound'

const App = () => {
    return(
        <div className='app-bg-container'>
            <BrowserRouter>
                <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/team-matches/:id' element={<BrowseTeamMatches/>}/>
                  <Route path='*' element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )   
}
export default App