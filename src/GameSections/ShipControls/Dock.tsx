import { useState } from "react"

function Dock({apiToken, shipSymbol}) {
    const [resp, setResp] = useState("");
    const [form, setForm] = useState({ token: apiToken, ship: shipSymbol});

    return(<>
      <h3>Dock</h3>
      <p>Dock your ship. This is needed to do numerous things such as selling goods and refueling the ship.</p>
        <input name="api-token" placeholder="API Token" value={form.token} onChange={(e) => setForm({ ...form, token: e.currentTarget.value })} />
        <input name="ship-symbol" placeholder="Ship Symbol" value={form.ship} onChange={(e) => setForm({ ...form, ship: e.currentTarget.value })} />

        <input type="submit" onClick={async () => {
          const resp = await fetch("https://api.spacetraders.io/v2/my/ships/" + form.ship + "/dock", {
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
export default Dock