import { useState } from "react"
import Agent from "./ViewAgent/ViewAgent";
import "./Play.css";
import StartingLocation from "./StartingLocation/StartingLocation";
import Contracts from "./Contracts/Contracts";
import Shipyard from "./Shipyard/Shipyard";

function Play({apiToken, sysSymbol, waypointSymbol}) {
  const [sections, setSection] = useState<React.ReactNode[]>([]);

  function returnSection(section : string) {
    switch(section) {
      case "viewAgent": 
        return <Agent apiToken={apiToken} />;
      case "viewContracts": 
        return <Contracts apiToken={apiToken} />;
      case "shipyard": 
        return <Shipyard apiToken={apiToken} sysSymbol={sysSymbol} />;
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
        <button onClick={() => addSection("viewContracts")}>View Contracts</button>
        <button onClick={() => addSection("shipyard")}>Shipyard</button>
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
