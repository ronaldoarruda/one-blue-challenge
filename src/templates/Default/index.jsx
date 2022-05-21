import './index.css';
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';




function Default({ children }) {
  return (
    <div className="App">
      <ToastContainer />
      <div className='background-page'>
        <img
          src="logo-art-you.png"
          alt="Logo"
          id='logo-one-blue' />
        <div className='content-text'>
          <h1>Every day we help artists, galleries and museums thrive in a new digital world</h1>
          <h2>Get started today with our specialized help</h2>
        </div>
      </div>
      {children}
    </div>
  );
}

export default Default;
