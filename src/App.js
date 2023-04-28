import React from 'react'
import Dashboard from './pages/Dashboard'
import NotFoundPage from './pages/NotFoundPage'
import Search from './pages/Search'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Dashboard/>}/>
                    <Route path='/search/:id' element={<Search/>}/>
                    <Route path='*' element={<NotFoundPage/>}/>
                </Routes>
            </Router>
        </>
    )
}
export default App