import { useState } from "react"

function FulfillContract({apiToken, shipSymbol, contractSymbol}) {
    const [resp, setResp] = useState("");
    const [form, setForm] = useState({token: apiToken, contract: contractSymbol, ship: shipSymbol, tradeGood: "", amount: ""});

    return(<>
        <h3>Fulfil Contract</h3>

        <input name="api-token" placeholder="API Token" value={form.token} onChange={(e) => setForm({ ...form, token: e.currentTarget.value })} />
        <input name="contract-id" placeholder="Contract ID" value={form.contract} onChange={(e) => setForm({ ...form, contract: e.currentTarget.value })} />

        <input type="submit" onClick={async () => {
            const resp = await fetch("https://api.spacetraders.io/v2/my/contracts/" + form.contract + "/fulfill", {
            method: 'POST',
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
export default FulfillContract