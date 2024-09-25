import { useState } from "react"

function ViewMarket({apiToken, sysSymbol, asteroidSymbol}) {
    const [resp, setResp] = useState("");
    const [form, setForm] = useState({ token: apiToken, systemSymbol: sysSymbol, waypoint: asteroidSymbol});

    return(<>
        <h3>View Market</h3>
        <p>Come and take a look at the wares! Enter the system's symbol and the waypoint symbol to view the goods.<br />Each market has a list of imports, exports and exchange goods which can be purchased and sold. From here you can view the estimated trade volume for each good. Larger trade volumes indicate more stable prices, while smaller trade volumes indicate more volatile prices.</p>
        <input name="api-token" placeholder="API Token" value={form.token} onChange={(e) => setForm({ ...form, token: e.currentTarget.value })} />
        <input name="system-symbol" placeholder="System Symbol" value={form.systemSymbol} onChange={(e) => setForm({ ...form, systemSymbol: e.currentTarget.value })} />
        <input name="waypoint-symbol" placeholder="Asteroid Waypoint Symbol" value={form.waypoint} onChange={(e) => setForm({ ...form, waypoint: e.currentTarget.value })} />

        <input type="submit" onClick={async () => {
            const resp = await fetch("https://api.spacetraders.io/v2/systems/" + form.systemSymbol + "/waypoints/" + form.waypoint + "/market", {
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
export default ViewMarket