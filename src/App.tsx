import "./App.css";
import Play from "./GameSections/Play";
import NewGame from "./GameSections/NewGame";

function App() {
  const sections = ['register', 'play'];
  function toggleSection(section : string) {
    sections.forEach(e => {document.getElementById(e)?.classList.remove('active')});
    document.getElementById(section)?.classList.toggle('active');
  }

  return (
    <>
      <h1>STQS</h1>
      <div className="startContainer">
        <pre id="APIToken"></pre>
        <div className="buttons">
          <button onClick={() => toggleSection('register')}>Register</button>
          <button onClick={() => toggleSection('play')}>Play Game</button>
        </div>
        <div id="register" className="section"><NewGame /></div>
        <div id="play" className="section"><Play /></div>
      </div>
    </>
  );
}

export default App;
