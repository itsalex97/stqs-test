import { useState } from "react"
import ViewMarket from "./ViewMarket";
// import Orbit from "./Orbit";

function Market({apiToken, sysSymbol, shipSymbol, asteroidSymbol}) {
    const [sections, setSection] = useState<React.ReactNode[]>([]);

    function returnSection(section : string) {
        switch(section) {
            case "viewMarket": 
                return <ViewMarket apiToken={apiToken} sysSymbol={sysSymbol} asteroidSymbol={asteroidSymbol} />;
            default: 
                return null;
        }
    }

    const addSection = (type: string) => {
      setSection([returnSection(type)]);
    };

    return(<>
        <h3>The Market</h3>
        <div className="btnContainer">
            <button onClick={() => addSection("viewMarket")}>View Market</button>
        </div>
        <div id="content" className="subsection-content">
            {sections.map((section, index) => (
            <div key={index}>{section}</div>
            ))}
        </div>
    </>)
}
export default Market