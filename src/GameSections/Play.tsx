import { useState } from "react"
import Agent from "./ViewAgent/ViewAgent";
import "./Play.css";
import StartingLocation from "./StartingLocation/StartingLocation";

function Play({apiToken, sysSymbol, waypointSymbol}) {
  const [sections, setSection] = useState<React.ReactNode[]>([]);

  function returnSection(section : string) {
    switch(section) {
      case "viewAgent": 
        return <Agent apiToken={apiToken} />;
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
    <h1>Play Game</h1>
    <div className="subsection-container">
      <div className="subsection-buttons">
        <button onClick={() => addSection("viewAgent")}>View Agent</button>
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
