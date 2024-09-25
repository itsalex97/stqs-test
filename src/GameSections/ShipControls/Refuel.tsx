import { useState } from "react"

function Refuel({apiToken, shipSymbol}) {
    const [resp, setResp] = useState("");
    const [form, setForm] = useState({ token: apiToken, ship: shipSymbol});

    return(<>
      <h3>Refuel</h3>
      <p>You are able to refuel if the current location has fuel in it's marketplace. One unit of fuel is 100 units in the ship's tank. A ship must be docked to refuel.</p>
        <input name="api-token" placeholder="API Token" value={form.token} onChange={(e) => setForm({ ...form, token: e.currentTarget.value })} />
        <input name="ship-symbol" placeholder="Ship Symbol" value={form.ship} onChange={(e) => setForm({ ...form, ship: e.currentTarget.value })} />

        <input type="submit" onClick={async () => {
          const resp = await fetch("https://api.spacetraders.io/v2/my/ships/" + form.ship + "/refuel", {
            method: "POST",
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
export default Refuel