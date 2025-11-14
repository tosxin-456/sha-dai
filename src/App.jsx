import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ScentPersonaQuiz from "./pages/capsule";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ScentPersonaQuiz />
    </>
  );
}

export default App;
