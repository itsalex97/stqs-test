import { useState } from "react"
import AsteroidSearch from "./AsteroidSearch";

function MiningExpedition({apiToken, sysSymbol}) {
    const [sections, setSection] = useState<React.ReactNode[]>([]);

    function returnSection(section : string) {
        switch(section) {
            case "asteroidSearch":
                return <AsteroidSearch apiToken={apiToken} sysSymbol={sysSymbol} />;
            default: 
                return null;
        }
    }

    const addSection = (type: string) => {
      setSection([returnSection(type)]);
    };

    return(<>
        <h3>Mining Expedition</h3>
        <div className="btnContainer">
            <button onClick={() => addSection("asteroidSearch")}>Asteroid Search</button>
        </div>
        <div id="content" className="subsection-content">
            {sections.map((section, index) => (
            <div key={index}>{section}</div>
            ))}
        </div>
    </>)
}
export default MiningExpedition