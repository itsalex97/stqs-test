import { useState } from "react"
import Agent from "./ViewAgent/ViewAgent";
import "./Play.css";
import StartingLocation from "./StartingLocation/StartingLocation";
import Contracts from "./Contracts/Contracts";
import Shipyard from "./Shipyard/Shipyard";
import ShipControls from "./ShipControls/ShipControls";
import AsteroidSearch from "./AsteroidSearch";

function Play({apiToken, sysSymbol, startWaypointSymbol}) {
  const [sections, setSection] = useState<React.ReactNode[]>([]);
  const [shipSymbol, setShipSymbol] = useState('');
  const [waypointSymbol, setWaypointSymbol] = useState('');

  function returnSection(section : string) {
    switch(section) {
      case "viewAgent": 
        return <Agent apiToken={apiToken} />;
      case "viewContracts": 
        return <Contracts apiToken={apiToken} />;
      case "shipyard": 
        return <Shipyard apiToken={apiToken} sysSymbol={sysSymbol} setShipSymbol={setShipSymbol} />;
        case "asteroidSearch": 
          return <AsteroidSearch apiToken={apiToken} sysSymbol={sysSymbol} setWaypointSymbol={setWaypointSymbol} />;
        case "shipControls": 
          return <ShipControls apiToken={apiToken} sysSymbol={sysSymbol} shipSymbol={shipSymbol} />;
      case "starting-location": 
        return <StartingLocation apiToken={apiToken} sysSymbol={sysSymbol} startWaypointSymbol={startWaypointSymbol} />;
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
