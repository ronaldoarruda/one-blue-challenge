import React from 'react';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'
import Login from './pages/Login/index.jsx';
import Default from './templates/Default/index.jsx';
import SignUp from './pages/SignUp/index.jsx';


const Router = () => {
  return (
    <BrowserRouter>
      <Default>
        <Routes>
          <Route element={<Login />} path="/login" exact />
          <Route element={<SignUp />} path="/sign-up" exact />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Default>
    </BrowserRouter>
  )
}

export default Router;