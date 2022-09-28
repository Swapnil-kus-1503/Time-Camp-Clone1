import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './SignupPage/Home'
import Protected from './SignupPage/Protected'
import SignUpPage from './SignupPage/SignUpPage'

function Allroutes() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Protected>

                    <Home />
                </Protected>} />
                <Route path='/login' element={
                    <SignUpPage />
                } />
            </Routes>
        </div>
    )
}

export default Allroutes