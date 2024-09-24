import { useState } from "react"

function ViewShipyards({apiToken, sysSymbol}) {
    const [resp, setResp] = useState("");
    const [form, setForm] = useState({ token: apiToken, systemSymbol: sysSymbol});

    return(<>
      <h3>View Shipyards</h3>
      <p>Enter your Token and System Symbol to search for shipyards in your system.<br />Make sure you keep track of the Waypoint Symbol of the Shipyard you wish to view the ships from!</p>
        <input name="api-token" placeholder="API Token" value={form.token} onChange={(e) => setForm({ ...form, token: e.currentTarget.value })} />
        <input name="system-symbol" placeholder="System Symbol" value={form.systemSymbol} onChange={(e) => setForm({ ...form, systemSymbol: e.currentTarget.value })} />

        <input type="submit" onClick={async () => {
          const resp = await fetch("https://api.spacetraders.io/v2/systems/" + form.systemSymbol + "/waypoints?traits=SHIPYARD", {
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
export default ViewShipyards