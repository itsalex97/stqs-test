import { useState } from "react"
import Orbit from "./Orbit";

function ShipControls({apiToken, shipSymbol}) {
    const [sections, setSection] = useState<React.ReactNode[]>([]);

    function returnSection(section : string) {
        switch(section) {
            case "orbit": 
                return <Orbit apiToken={apiToken} shipSymbol={shipSymbol} />;
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
        </div>
        <div id="content" className="subsection-content">
            {sections.map((section, index) => (
            <div key={index}>{section}</div>
            ))}
        </div>
    </>)
}
export default ShipControls