import { useState } from "react"

function PurchaseShip({apiToken, shipWaypointSymbol, setShipSymbol}) {
    const [resp, setResp] = useState("");
    const [form, setForm] = useState({ token: apiToken, shipType: "", startWaypointSymbol: shipWaypointSymbol});

    return(<>
        <h3>View Shipyards</h3>
        <p>Enter the Location you are wishing to purchase from and the type of ship you want to purchase to add the vessel to your fleet. Make sure your Token is correct.</p>
        <input name="api-token" placeholder="API Token" value={form.token} onChange={(e) => setForm({ ...form, token: e.currentTarget.value })} />
        <input name="waypoint-symbol" placeholder="Ship Type" value={form.shipType} onChange={(e) => setForm({ ...form, shipType: e.currentTarget.value })} />
        <input name="waypoint-symbol" placeholder="Shipyard Waypoint Symbol" value={form.startWaypointSymbol} onChange={(e) => setForm({ ...form, startWaypointSymbol: e.currentTarget.value })} />

        <input type="submit" onClick={async () => {
            const resp = await fetch("https://api.spacetraders.io/v2/my/ships", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + form.token,
                },
                body: JSON.stringify({
                  shipType: form.shipType,
                  startWaypointSymbol: form.startWaypointSymbol,
                }),
            });
    
            const json = await resp.json();

            if(resp.ok) {
                setShipSymbol(json.data.ship.symbol);
            }

            setResp(JSON.stringify(json, null, 2))
        }} />
        <pre>Response: {resp}</pre>
      </>)
}
export default PurchaseShip