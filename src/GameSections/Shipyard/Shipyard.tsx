import { useState } from "react"
import "./Shipyard.css"
import ViewShipyards from "./ViewShipyards";
import ViewShips from "./ViewShips";

function Shipyard({apiToken, sysSymbol}) {
    const [sections, setSection] = useState<React.ReactNode[]>([]);

    function returnSection(section : string) {
        switch(section) {
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
            <button>View Shipyards</button>
            <button>View Available Ships</button>
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