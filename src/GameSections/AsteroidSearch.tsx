import { useState } from "react"

function AsteroidSearch({apiToken, sysSymbol, setWaypointSymbol}) {
    const [resp, setResp] = useState("");
    const [form, setForm] = useState({ token: apiToken, systemSymbol: sysSymbol});

    return(<>
      <h3>Asteroid Search</h3>
      <p>Have a mining drone? You're in luck!<br />You can use this drone to go excavate valuable ores and minerals from asteroids. Enter your Token and System Symbol to begin your search.</p>
        <input name="api-token" placeholder="API Token" value={form.token} onChange={(e) => setForm({ ...form, token: e.currentTarget.value })} />
        <input name="system-symbol" placeholder="System Symbol" value={form.systemSymbol} onChange={(e) => setForm({ ...form, systemSymbol: e.currentTarget.value })} />

        <input type="submit" onClick={async () => {
          const resp = await fetch("https://api.spacetraders.io/v2/systems/" + form.systemSymbol + "/waypoints?type=ENGINEERED_ASTEROID", {
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer " + form.token,
            }
          });
    
          const json = await resp.json();

          if(resp.ok) {
            setWaypointSymbol(json.data[0].symbol)
          }
    
          setResp(JSON.stringify(json, null, 2))
        }} />
        <pre>Response: {resp}</pre>
      </>)
}
export default AsteroidSearch