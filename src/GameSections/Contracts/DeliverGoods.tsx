import { useState } from "react"

function DeliverGoods({apiToken, shipSymbol, contractSymbol}) {
    const [resp, setResp] = useState("");
    const [form, setForm] = useState({token: apiToken, contract: contractSymbol ,ship: shipSymbol, tradeGood: "", amount: ""});

    return(<>
        <h3>Deliver Goods</h3>
        <p>If you're docked at the location with the delivery waypoint and have the contracted goods in your cargo, you are able to deliver the goods for your contract.<br />You must enter the ship you're delivering with, the type of good you are delivering and the number of units.</p>

        <input name="api-token" placeholder="API Token" value={form.token} onChange={(e) => setForm({ ...form, token: e.currentTarget.value })} />
        <input name="contract-id" placeholder="Contract ID" value={form.contract} onChange={(e) => setForm({ ...form, contract: e.currentTarget.value })} />
        <input name="ship-symbol" placeholder="Ship Symbol" value={form.ship} onChange={(e) => setForm({ ...form, ship: e.currentTarget.value })} />
        <input name="trade-good" placeholder="Trade Good" value={form.tradeGood} onChange={(e) => setForm({ ...form, tradeGood: e.currentTarget.value })} />
        <input name="amount" placeholder="Number of Units" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.currentTarget.value })} />

        <input type="submit" onClick={async () => {
            const resp = await fetch("https://api.spacetraders.io/v2/my/contracts/" + form.contract + "/deliver", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + form.token,
            },
            body: JSON.stringify({
                shipSymbol: form.ship,
                tradeSymbol: form.tradeGood,
                units: form.amount,
            })
            });
    
            const json = await resp.json();
    
            setResp(JSON.stringify(json, null, 2))
        }} />
        <pre>Response: {resp}</pre>
      </>)
}
export default DeliverGoods