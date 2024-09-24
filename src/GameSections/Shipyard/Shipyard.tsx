import { useState } from "react"
import "./Shipyard.css"
import ViewShipyards from "./ViewShipyards";
import ViewShips from "./ViewShips";

function Shipyard({apiToken, sysSymbol}) {
    const [sections, setSection] = useState<React.ReactNode[]>([]);
    const [shipWaypointSymbol, setShipWaypointSymbol] = useState('');

    function returnSection(section : string) {
        switch(section) {
            case "viewShipyards": 
                return <ViewShipyards apiToken={apiToken} sysSymbol={sysSymbol} />;
            case "viewShips": 
                return <ViewShips apiToken={apiToken} sysSymbol={sysSymbol} shipWaypointSymbol={shipWaypointSymbol} setShipWaypointSymbol={setShipWaypointSymbol} />;
            default: 
                return null;
        }
    }

    const addSection = (type: string) => {
      setSection([returnSection(type)]);
    };

    return(<>
        <h3>The Shipyard</h3>
        <div className="btnContainer">
            <button onClick={() => addSection("viewShipyards")}>View Shipyards</button>
            <button onClick={() => addSection("viewShips")}>View Available Ships</button>
            <button>Purchase Ship</button>
        </div>
        <div id="content" className="subsection-content">
            {sections.map((section, index) => (
            <div key={index}>{section}</div>
            ))}
        </div>
    </>)
}
export default Shipyard