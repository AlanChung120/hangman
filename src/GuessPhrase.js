import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function GuessPhrase() {
  const location = useLocation();
  const navigate = useNavigate();
  const [displayPhrase, setDisplayPhrase] = useState(location.state.phrase.map((e, i) => (e.match(/[A-Z]/i) ? "_" : e)));
  const [alphaButtons, setAlphaButtons] = useState(Array.from(Array(26)).map((e, i) => 1));
  const [guess, setGuess] = useState('');
  const [error, setError] = useState(0);

  // check if player won or lost
  const checkGameEnd = useCallback(async () => {
    if (error >= 6) {
      navigate("/lose", {state:{phrase:location.state.phrase.join('')}});
    }
    if (displayPhrase.join('') === location.state.phrase.join('')) {
      navigate("/win", {state:{phrase:displayPhrase.join(''), error:error}});
    }
  }, [navigate, error, displayPhrase, location.state.phrase]);

  useEffect(() => {checkGameEnd();}, [checkGameEnd]);

  // handle each alphabet button clicks
  function handleAlphaClick(alphabet) {
    let tempDisplay = [...displayPhrase];
    var wrongGuess = true;
    for (let i = 0; i < location.state.phrase.length; i++) {
      if (location.state.phrase[i] === alphabet) {
        tempDisplay[i] = alphabet;
        wrongGuess = false;
      }
    }
    setDisplayPhrase(tempDisplay);
    if (wrongGuess) {
      setError(error+1);
    }
    let alphaIndex = alphabet.charCodeAt();
    let tempAlphaButtons = [...alphaButtons];
    tempAlphaButtons[alphaIndex - 65] = 0;
    setAlphaButtons(tempAlphaButtons);
  }

  // check if the player's guess matches
  function handleGuess() {
    if (guess.toUpperCase() === location.state.phrase.join('')) {
      navigate("/win", {state:{phrase:guess.toUpperCase(), error:error}}); 
    } else {
      setError(error+1);
      setGuess("");
    }
  }

  return (
    <>
      <div className="column is-flex is-justify-content-center">
        <img src={'images/hangman' + error + '.png'} alt={error + ' errors'}/>
      </div>

      <div className="column is-flex is-justify-content-center">
        {displayPhrase.map((e, i) => <div key={i} className="is-25px is-flex is-justify-content-center"><label key={i} className="title is-4">{e}</label></div>
        )}
      </div>

      <div className="column is-flex is-justify-content-center">
        <label className="label">Enter a guess: </label>
      </div>
      <div className="columns is-flex is-justify-content-center">
        <div className="column is-6">
        <input className="input" type="text" placeholder="Enter a guess" value={ guess } onChange = {e => setGuess(e.target.value) }></input>
        </div>
        <div className="column is-1">
        <button className="button is-primary" onClick={ handleGuess }>Submit</button> 
        </div>
      </div>

      <div className="column is-flex is-justify-content-center">
        {alphaButtons.map((alpha, i) => (alpha === 0 ? 
          <button key={i} className="button is-danger is-responsive mt-2 ml-1">{String.fromCharCode(i+65)}</button> :
          <button key={i} className="button is-primary is-responsive mt-2 ml-1" onClick={e => handleAlphaClick(String.fromCharCode(i+65))}>{String.fromCharCode(i+65)}</button>
        ))}
      </div>
    </>
  )
}
