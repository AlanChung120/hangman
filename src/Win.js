import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Win() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <div className="column is-flex is-justify-content-center">
        <img src={'images/hangman' + location.state.error + '.png'} alt={location.state.error + ' errors'}/>
      </div>
      <div className="column is-flex is-justify-content-center">
        <label className="title is-4 has-text-primary">You Win! </label>
      </div>
      <div className="column is-flex is-justify-content-center">
        <label className="title is-4 has-text-primary">The phrase was: {location.state.phrase} </label>
      </div>
      <div className="column is-flex is-justify-content-center">
        <button className="button is-primary" onClick={e => navigate("/")}>Play Again</button> 
      </div>
    </>
  )
}
