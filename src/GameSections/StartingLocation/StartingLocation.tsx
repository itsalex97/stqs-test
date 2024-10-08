import { useState } from "react"

function StartingLocation({apiToken, sysSymbol, waypointSymbol}) {
    const [resp, setResp] = useState("");
    const [form, setForm] = useState({ token: apiToken, systemSymbol: sysSymbol, waypointSymbol: waypointSymbol});

    return(<>
      <h3>Starting Location</h3>
      <p>Enter your Token, Starting Symbol and Waypoint Symbol to see the location you started at.</p>
      <input name="api-token" placeholder="API Token" value={form.token} onChange={(e) => setForm({ ...form, token: e.currentTarget.value })} />
      <input name="system-symbol" placeholder="System Symbol" value={form.systemSymbol} onChange={(e) => setForm({ ...form, systemSymbol: e.currentTarget.value })} />
      <input name="waypoint-symbol" placeholder="Waypoint Symbol" value={form.waypointSymbol} onChange={(e) => setForm({ ...form, waypointSymbol: e.currentTarget.value })} />

      <input type="submit" onClick={async () => {
        const resp = await fetch("https://api.spacetraders.io/v2/systems/" + form.systemSymbol+"/waypoints/" + form.waypointSymbol, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + form.token,
          }
        });
  
        const json = await resp.json();
  
        setResp(JSON.stringify(json, null, 2))
      }} />
      <pre>Response: {resp}</pre>
      </>)
}
export default StartingLocation