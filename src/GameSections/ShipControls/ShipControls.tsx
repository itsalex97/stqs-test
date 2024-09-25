import { useState } from "react"
import Orbit from "./Orbit";
import Navigate from "./Navigate";
import Dock from "./Dock";
import Refuel from "./Refuel";
import Extract from "./Extract";

function ShipControls({apiToken, shipSymbol, asteroidSymbol}) {
    const [sections, setSection] = useState<React.ReactNode[]>([]);

    function returnSection(section : string) {
        switch(section) {
            case "orbit": 
                return <Orbit apiToken={apiToken} shipSymbol={shipSymbol} />;
            case "navigate": 
                return <Navigate apiToken={apiToken} shipSymbol={shipSymbol} asteroidSymbol={asteroidSymbol} />
            case "dock": 
                return <Dock apiToken={apiToken} shipSymbol={shipSymbol} />
            case "refuel": 
                return <Refuel apiToken={apiToken} shipSymbol={shipSymbol} />
            case "extract": 
                return <Extract apiToken={apiToken} shipSymbol={shipSymbol} />
            default: 
                return null;
        }
    }

    const addSection = (type: string) => {
      setSection([returnSection(type)]);
    };

    return(<>
        <h3>Ship Controls</h3>
        <div className="btnContainer">
            <button onClick={() => addSection("orbit")}>Orbit</button>
            <button onClick={() => addSection("navigate")}>Navigate</button>
            <button onClick={() => addSection("dock")}>Dock</button>
            <button onClick={() => addSection("refuel")}>Refuel</button>
            <button onClick={() => addSection("extract")}>Extract</button>
        </div>
        <div id="content" className="subsection-content">
            {sections.map((section, index) => (
            <div key={index}>{section}</div>
            ))}
        </div>
    </>)
}
export default ShipControls