import { useState, useEffect } from "react";

function App() {
  const [targetWord, setTargetWord] = useState("eimer");
  const [guess, setGuess] = useState("");
  const [numOfGuesses, setNumOfGuesses] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleWordSubmit = (event) => {
    event.preventDefault();

    let letterFeedback = "";

    for (let i = 0; i < guess.length; i++) {
      if (guess[i].toLowerCase() === targetWord[i]) {
        setFeedback((letterFeedback += "green "));
      } else if (targetWord.includes(guess[i].toLowerCase())) {
        setFeedback((letterFeedback += "yellow "));
      } else {
        setFeedback((letterFeedback += "x "));
      }
    }

    setFeedback(letterFeedback);
  };

  const changeGuess = (event) => {
    setGuess(event.target.value.toUpperCase());
  };

  return (
    <div className="App">
      <p>Number of guesses: {numOfGuesses}</p>
      <p>Your guess: {guess}</p>
      <p>Target word: {targetWord.toUpperCase()}</p>
      <form onSubmit={handleWordSubmit}>
        Your word: <input value={guess} onChange={changeGuess}></input>
        <button>Submit</button>
      </form>
      <h2>{feedback}</h2>
    </div>
  );
}

export default App;
