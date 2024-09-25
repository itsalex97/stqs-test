import { useState } from "react"

function SellCargo({apiToken, shipSymbol}) {
    const [resp, setResp] = useState("");
    const [form, setForm] = useState({ token: apiToken, ship: shipSymbol, tradeGood: "", amount: ""});

    return(<>
        <h3>Sell Cargo</h3>
        <p>Come and sell your goods! Specify the type of good you wish to sell and the number of units. If you are unsure of what goods you have to sell, visit the shipyard!<br />A ship must be docked to sell cargo.</p>
        <input name="api-token" placeholder="API Token" value={form.token} onChange={(e) => setForm({ ...form, token: e.currentTarget.value })} />
        <input name="ship-symbol" placeholder="Ship Symbol" value={form.ship} onChange={(e) => setForm({ ...form, ship: e.currentTarget.value })} />
        <input name="trade-good" placeholder="Trade Good" value={form.tradeGood} onChange={(e) => setForm({ ...form, tradeGood: e.currentTarget.value })} />
        <input name="amount" placeholder="Number of Units" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.currentTarget.value })} />

        <input type="submit" onClick={async () => {
            const resp = await fetch("https://api.spacetraders.io/v2/my/ships/" + form.ship + "/sell", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + form.token,
            },
            body: JSON.stringify({
              symbol: form.tradeGood,
              units: form.amount,
            })
            });
    
            const json = await resp.json();
    
            setResp(JSON.stringify(json, null, 2))
        }} />
        <pre>Response: {resp}</pre>
    </>)
}
export default SellCargo