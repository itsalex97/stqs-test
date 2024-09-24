import { useState } from "react"
import AcceptContract from "./AcceptContract";
import ViewContracts from "./ViewContracts";

function Contracts({apiToken}) {
    const [sections, setSection] = useState<React.ReactNode[]>([]);

    function returnSection(section : string) {
        switch(section) {
            case "viewContracts": 
                return <ViewContracts apiToken={apiToken} />;
            case "acceptContract": 
                return <AcceptContract apiToken={apiToken} />;
            default: 
                return null;
        }
    }

    const addSection = (type: string) => {
      setSection([returnSection(type)]);
    };

    return(<>
        <h3>Contract Hub</h3>
        <div className="btnContainer">
            <button onClick={() => addSection("viewContracts")}>View Contract</button>
            <button onClick={() => addSection("acceptContract")}>Accept Contract</button>
        </div>
        <div id="content" className="subsection-content">
            {sections.map((section, index) => (
            <div key={index}>{section}</div>
            ))}
        </div>
    </>)
}
export default Contracts