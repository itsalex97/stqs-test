import { useState } from "react"

function AcceptContract({apiToken, setContractSymbol}) {
    const [resp, setResp] = useState("");
    const [form, setForm] = useState({token: apiToken, contract: "" });

    return(<>
        <h3>Accept a Contract</h3>
        <p>Enter the your Token and a Contract ID to accept a contract. This will give you a small amount of credits up front - you will receive the final amount on delivery.</p>

        <input name="api-token" placeholder="API Token" value={form.token} onChange={(e) => setForm({ ...form, token: e.currentTarget.value })} />
        <input name="contract-id" placeholder="Contract ID" value={form.contract} onChange={(e) => setForm({ ...form, contract: e.currentTarget.value })} />

        <input type="submit" onClick={async () => {
            const resp = await fetch("https://api.spacetraders.io/v2/my/contracts/"+form.contract+"/accept", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + form.token,
            }
            });
    
            const json = await resp.json();

            if(resp.ok) {
                setContractSymbol(json.data.contract.id);
            }
    
            setResp(JSON.stringify(json, null, 2))
        }} />

        <pre>Response: {resp}</pre>
      </>)
}
export default AcceptContract