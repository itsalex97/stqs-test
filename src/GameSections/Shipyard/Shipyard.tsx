import { useState } from "react"
import "./Shipyard.css"
import ViewShipyards from "./ViewShipyards";
import ViewShips from "./ViewShips";
import PurchaseShip from "./PurchaseShip";

function Shipyard({apiToken, sysSymbol, setShipSymbol}) {
    const [sections, setSection] = useState<React.ReactNode[]>([]);
    const [shipWaypointSymbol, setShipWaypointSymbol] = useState('');

    function returnSection(section : string) {
        switch(section) {
            case "viewShipyards": 
                return <ViewShipyards apiToken={apiToken} sysSymbol={sysSymbol} />;
            case "viewShips": 
                return <ViewShips apiToken={apiToken} sysSymbol={sysSymbol} shipWaypointSymbol={shipWaypointSymbol} setShipWaypointSymbol={setShipWaypointSymbol} />;
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
            <button onClick={() => addSection("viewShipyards")}>View Shipyards</button>
            <button onClick={() => addSection("viewShips")}>View Available Ships</button>
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