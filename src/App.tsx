import { useState } from "react"
import "./App.css";
import Play from "./GameSections/Play";
import NewGame from "./GameSections/NewGame";

function App() {
  const [apiToken, setToken] = useState('');
  const [sysSymbol, setSysSymbol] = useState('');
  const [startWaypointSymbol, setStartWaypointSymbol] = useState('');

  const sections = ['register', 'play'];
  function toggleSection(section : string) {
    sections.forEach(e => {document.getElementById(e)?.classList.remove('active')});
    document.getElementById(section)?.classList.toggle('active');
  }

  return (
    <>
      <h1>STQS</h1>
      <div className="startContainer">
        <div className="buttons">
          <button onClick={() => toggleSection('register')}>Register</button>
          <button onClick={() => toggleSection('play')}>Play Game</button>
        </div>
        <div id="register" className="section"><NewGame apiToken={apiToken} setToken={setToken} sysSymbol={sysSymbol} setSysSymbol={setSysSymbol} startWaypointSymbol={startWaypointSymbol} setStartWaypointSymbol={setStartWaypointSymbol}/></div>
        <div id="play" className="section"><Play apiToken={apiToken} sysSymbol={sysSymbol} startWaypointSymbol={startWaypointSymbol} /></div>
      </div>
    </>
  );
}

export default App;
