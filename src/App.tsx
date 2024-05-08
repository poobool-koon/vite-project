import { useState } from "react";
import c from "/cake.png";
import ab from "/bombiring.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>순위표</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="characters">
        <img src={c} className="cake" alt="BC" />
        <div></div>
        <img src={ab} className="bambiring" alt="BC logo" />
      </div>
    </>
  );
}

export default App;
