import { useState } from "react"

function PurchaseShip({apiToken, shipWaypointSymbol}) {
    const [resp, setResp] = useState("");
    const [form, setForm] = useState({ token: apiToken, shipType: "", waypointSymbol: shipWaypointSymbol});

    return(<>
        <h3>View Shipyards</h3>
        <p>Enter the Location you are wishing to purchase from and the type of ship you want to purchase to add the vessel to your fleet. Make sure your Token is correct.</p>
        <input name="api-token" placeholder="API Token" value={form.token} onChange={(e) => setForm({ ...form, token: e.currentTarget.value })} />
        <input name="waypoint-symbol" placeholder="Ship Type" value={form.shipType} onChange={(e) => setForm({ ...form, shipType: e.currentTarget.value })} />
        <input name="waypoint-symbol" placeholder="Shipyard Waypoint Symbol" value={form.waypointSymbol} onChange={(e) => setForm({ ...form, waypointSymbol: e.currentTarget.value })} />

        <input type="submit" onClick={async () => {
            const resp = await fetch("https://api.spacetraders.io/v2/my/ships", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + form.token,
                },
                body: JSON.stringify({
                  shipType: form.shipType,
                  waypointSymbol: form.waypointSymbol,
                }),
            });
    
            const json = await resp.json();

            setResp(JSON.stringify(json, null, 2))
        }} />
        <pre>Response: {resp}</pre>
      </>)
}
export default PurchaseShip