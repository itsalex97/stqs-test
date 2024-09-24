import { useState } from "react"

function ViewShips({apiToken, sysSymbol, shipWaypointSymbol, setShipWaypointSymbol}) {
    const [resp, setResp] = useState("");
    const [form, setForm] = useState({ token: apiToken, systemSymbol: sysSymbol, waypointSymbol: shipWaypointSymbol});

    return(<>
        <h3>View Available Ships</h3>
        <p>Enter the Waypoint Symbol for the shipyard you wish to view the ships from. If a ship catches your fancy, you can copy the type of ship you wish to purchase and click on the 'Purchase Ship' button.</p>
        <input name="api-token" placeholder="API Token" value={form.token} onChange={(e) => setForm({ ...form, token: e.currentTarget.value })} />
        <input name="system-symbol" placeholder="System Symbol" value={form.systemSymbol} onChange={(e) => setForm({ ...form, systemSymbol: e.currentTarget.value })} />
        <input name="waypoint-symbol" placeholder="Shipyard Waypoint Symbol" value={form.waypointSymbol} onChange={(e) => setForm({ ...form, waypointSymbol: e.currentTarget.value })} />

        <input type="submit" onClick={async () => {
            const resp = await fetch("https://api.spacetraders.io/v2/systems/" + form.systemSymbol + "/waypoints/" + form.waypointSymbol + "/shipyard", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + form.token,
            }
            });
    
            const json = await resp.json();

            if(resp.ok) {
                setShipWaypointSymbol(json.data.symbol);
            }
    
            setResp(JSON.stringify(json, null, 2))
        }} />
        <pre>Response: {resp}</pre>
    </>)
}
export default ViewShips