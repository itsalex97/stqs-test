import { useState } from "react"
import Agent from "./ViewAgent/ViewAgent";
import "./Play.css";
import StartingLocation from "./StartingLocation/StartingLocation";
import Contracts from "./Contracts/Contracts";
import Shipyard from "./Shipyard/Shipyard";
import AsteroidSearch from "./AsteroidSearch";
import ShipControls from "./ShipControls/ShipControls";

function Play({apiToken, sysSymbol, waypointSymbol}) {
  const [sections, setSection] = useState<React.ReactNode[]>([]);
  const [shipSymbol, setShipSymbol] = useState('');
  const [asteroidSymbol, setAsteroidSymbol] = useState('');

  function returnSection(section : string) {
    switch(section) {
      case "viewAgent": 
        return <Agent apiToken={apiToken} />;
      case "viewContracts": 
        return <Contracts apiToken={apiToken} />;
      case "shipyard": 
        return <Shipyard apiToken={apiToken} sysSymbol={sysSymbol} setShipSymbol={setShipSymbol} />;
        case "asteroidSearch":
            return <AsteroidSearch apiToken={apiToken} sysSymbol={sysSymbol} setAsteroidSymbol={setAsteroidSymbol} />;
        case "shipControls":
            return <ShipControls apiToken={apiToken} shipSymbol={shipSymbol} asteroidSymbol={asteroidSymbol} />;
      case "starting-location": 
        return <StartingLocation apiToken={apiToken} sysSymbol={sysSymbol} waypointSymbol={waypointSymbol} />;
      default: 
        return null;
    }
  }

  const addSection = (type: string) => {
    setSection([returnSection(type)]);
  };

  return (<>
    <h2>Play Game</h2>
    <div className="subsection-container">
      <div className="subsection-buttons">
        <button onClick={() => addSection("viewAgent")}>View Agent</button>
        <button onClick={() => addSection("viewContracts")}>Contract Hub</button>
        <button onClick={() => addSection("shipyard")}>The Shipyard</button>
        <button onClick={() => addSection("asteroidSearch")}>Asteroid Search</button>
        <button onClick={() => addSection("shipControls")}>Ship Controls</button>
        <button onClick={() => addSection("starting-location")}>Starting Location</button>
      </div>
      <div id="content" className="subsection-content">
        {sections.map((section, index) => (
          <div key={index}>{section}</div>
        ))}
      </div>
    </div>
  </>)
}

export default Play
