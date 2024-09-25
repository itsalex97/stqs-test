import { useState } from "react"

function Extract({apiToken, shipSymbol}) {
    const [resp, setResp] = useState("");
    const [form, setForm] = useState({ token: apiToken, ship: shipSymbol});

    return(<>
      <h3>Extract</h3>
      <p>If you are in a mining drone you are able to extract ore and mineral from an asteroid using a mining laser.<br />After extraction you will be put on a cooldown.</p>
        <input name="api-token" placeholder="API Token" value={form.token} onChange={(e) => setForm({ ...form, token: e.currentTarget.value })} />
        <input name="ship-symbol" placeholder="Ship Symbol" value={form.ship} onChange={(e) => setForm({ ...form, ship: e.currentTarget.value })} />

        <input type="submit" onClick={async () => {
          const resp = await fetch("https://api.spacetraders.io/v2/my/ships/" + form.ship + "/extract", {
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
export default Extract