import { useState } from "react"

function StartingLocation({apiToken, sysSymbol, startWaypointSymbol}) {
    const [resp, setResp] = useState("");
    const [form, setForm] = useState({ token: apiToken, systemSymbol: sysSymbol, startWaypointSymbol: startWaypointSymbol});

    return(<>
      <h3>Starting Location</h3>
      <p>Enter your Token, Starting Symbol and Waypoint Symbol to see the location you started at.</p>
      <input name="api-token" placeholder="API Token" value={form.token} onChange={(e) => setForm({ ...form, token: e.currentTarget.value })} />
      <input name="system-symbol" placeholder="System Symbol" value={form.systemSymbol} onChange={(e) => setForm({ ...form, systemSymbol: e.currentTarget.value })} />
      <input name="waypoint-symbol" placeholder="Waypoint Symbol" value={form.startWaypointSymbol} onChange={(e) => setForm({ ...form, startWaypointSymbol: e.currentTarget.value })} />

      <input type="submit" onClick={async () => {
        const resp = await fetch("https://api.spacetraders.io/v2/systems/" + form.systemSymbol+"/waypoints/" + form.startWaypointSymbol, {
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