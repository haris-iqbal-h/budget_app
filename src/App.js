import React from 'react'
import NotFoundPage from './pages/NotFoundPage'
import Search from './pages/Search'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/search/:id' element={<Search/>}/>
                    <Route path='*' element={<NotFoundPage/>}/>
                </Routes>
            </Router>
        </>
    )
}
export default App