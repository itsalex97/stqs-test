import "./App.css";
import LogIn from "./LogIn";
import NewGame from "./NewGame";

function App() {
  const sections = ['register', 'login'];
  function toggleSection(section : string) {
    sections.forEach(e => {document.getElementById(e)?.classList.remove('active')});
    document.getElementById(section)?.classList.toggle('active')
  }

  return (
    <>
      <h1>STQS</h1>
      <div className="startContainer">
        <div className="buttons">
          <button onClick={() => toggleSection('register')}>Register</button>
          <button onClick={() => toggleSection('login')}>Log in</button>
        </div>
        <div id="register" className="section"><NewGame /></div>
        <div id="login" className="section"><LogIn /></div>
      </div>
    </>
  );
}

export default App;
