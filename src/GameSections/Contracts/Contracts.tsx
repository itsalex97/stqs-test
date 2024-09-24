import { useState } from "react"

function Contracts({apiToken}) {
    const [resp, setResp] = useState("");
    const [form, setForm] = useState({ token: apiToken});
    const [contractForm, setContractForm] = useState({contract: ""});

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
        
        <h3>Accept a Contract</h3>
        <p>Enter the your Token and a Contract ID to accept a contract. This will give you a small amount of credits up front - you will receive the final amount on delivery.</p>

        <input name="api-token" placeholder="Contract ID" value={contractForm.contract} onChange={(e) => setContractForm({ ...contractForm, contract: e.currentTarget.value })} />

        <input type="submit" onClick={async () => {
            const resp = await fetch("https://api.spacetraders.io/v2/my/contracts/"+contractForm.contract+"/accept", {
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
export default Contracts