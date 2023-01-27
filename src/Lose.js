import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Lose() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <div className="column is-flex is-justify-content-center">
        <img src='images/hangman6.png' alt="You lose"/>
      </div>
      <div className="column is-flex is-justify-content-center">
        <label className="title is-4 has-text-danger">You Lose </label>
      </div>
      <div className="column is-flex is-justify-content-center">
        <label className="title is-4 has-text-danger">The phrase was: {location.state.phrase} </label>
      </div>
      <div className="column is-flex is-justify-content-center">
        <button className="button is-primary" onClick={e => navigate("/")}>Play Again</button> 
      </div>
    </>
  )
}
