import { useState } from "react"
import "./Shipyard.css"
import ViewShipyards from "./ViewShipyards";
import ViewShipyardShips from "./ViewShipyardShips";
import PurchaseShip from "./PurchaseShip";
import ViewShips from "./ViewAgentShips";
import ViewShipCargo from "./ViewShipCargo";

function Shipyard({apiToken, sysSymbol, shipSymbol, setShipSymbol}) {
    const [sections, setSection] = useState<React.ReactNode[]>([]);
    const [shipWaypointSymbol, setShipWaypointSymbol] = useState('');

    function returnSection(section : string) {
        switch(section) {
            case "viewShips": 
                return <ViewShips apiToken={apiToken} />;
            case "viewCargo": 
                return <ViewShipCargo apiToken={apiToken} shipSymbol={shipSymbol} />;
            case "viewShipyards": 
                return <ViewShipyards apiToken={apiToken} sysSymbol={sysSymbol} />;
            case "viewShipyardShips": 
                return <ViewShipyardShips apiToken={apiToken} sysSymbol={sysSymbol} shipWaypointSymbol={shipWaypointSymbol} setShipWaypointSymbol={setShipWaypointSymbol} />;
            case "purchaseShip": 
                return <PurchaseShip apiToken={apiToken} shipWaypointSymbol={shipWaypointSymbol} setShipSymbol={setShipSymbol} />;
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
            <button onClick={() => addSection("viewShips")}>View Ships</button>
            <button onClick={() => addSection("viewCargo")}>View Ship Cargo</button>
            <button onClick={() => addSection("viewShipyards")}>View Shipyards</button>
            <button onClick={() => addSection("viewShipyardShips")}>View Shipyard's Ships</button>
            <button onClick={() => addSection("purchaseShip")}>Purchase Ship</button>
        </div>
        <div id="content" className="subsection-content">
            {sections.map((section, index) => (
            <div key={index}>{section}</div>
            ))}
        </div>
    </>)
}
export default Shipyard