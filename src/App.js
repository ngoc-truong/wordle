import { useState, useEffect } from "react";

function App() {
  const [word, setWord] = useState("");

  useEffect(() => {
    setWord("Moin");
  }, []);

  return <div className="App">{word}</div>;
}

export default App;
