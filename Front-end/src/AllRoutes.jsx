import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './LoginPage/Home'
import Protected from './LoginPage/Protected'
import LoginInPage from './LoginPage/LoginPage'
function Allroutes() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Protected>
                     <Home />
                </Protected>} />
                <Route path='/login' element={
                    <LoginInPage />
                } />
            </Routes>
        </div>
    )
}

export default Allroutes