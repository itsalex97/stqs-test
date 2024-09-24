import { useState } from "react"

function ViewContracts({apiToken}) {
    const [resp, setResp] = useState("");
    const [form, setForm] = useState({token: apiToken });

    return(<>
        <h3>View Contracts</h3>
        <p>Enter the API token you received from registering your account and you can view all of your current contracts. Each contract has terms, describing the requirements for completing the contract. Contracts will have an expiry date and a deadline for when it must be completed. If you fail to meet this deadline the faction will revoke the contract and reclaim any advance funds you received.</p>

        <input name="api-token" placeholder="API Token" value={form.token} onChange={(e) => setForm({ ...form, token: e.currentTarget.value })} />

        <input type="submit" onClick={async () => {
            const resp = await fetch("https://api.spacetraders.io/v2/my/contracts", {
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
export default ViewContracts