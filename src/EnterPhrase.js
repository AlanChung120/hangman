import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function EnterPhrase() {
  var randomWords = require('random-words');
  const [phrase, setPhrase] =  useState('');
  const navigate = useNavigate();

  // check if phrase is less than 60 characters
  function handleEnter() {
    if (phrase.length > 60 || phrase.length === 0) {
      alert("Invalid Phrase (Too long or too short)");
      setPhrase("");
    } else {
      navigate("/guess", {state:{phrase:[...phrase.toUpperCase()]}}); 
    }
  }

  // get random word
  function handleRandom() {
    navigate("/guess", {state:{phrase:[...randomWords().toUpperCase()]}}); 
  }

  return (
    <>
      <div className="column is-flex is-justify-content-center">
        <label className="title is-2">Enter the Phrase: </label>
      </div>
      <div className="columns is-flex is-justify-content-center">
        <div className="column is-6">
          <input className="input" type="password" placeholder="Enter the Phrase" value={ phrase } onChange = {e => setPhrase(e.target.value) }></input>
        </div>
        <div className="column is-1">
          <button className="button is-primary" onClick={ handleEnter }>Submit</button> 
        </div>
      </div>
      <div className="column is-flex is-justify-content-center">
        <label className="title is-2">OR </label>
      </div>
      <div className="column is-flex is-justify-content-center">
        <button className="button is-info" onClick={ handleRandom }>Get Random Word</button>
      </div>
    </>
  )
}
