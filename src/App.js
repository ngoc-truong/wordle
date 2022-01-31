import { useState, useEffect } from "react";

function App() {
  const [targetWord, setTargetWord] = useState("eimer");
  const [guess, setGuess] = useState("");
  const [numOfGuesses, setNumOfGuesses] = useState(0);

  const handleWordSubmit = (event) => {
    event.preventDefault();
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
    </div>
  );
}

export default App;
