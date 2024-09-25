import { useState } from "react"

function ViewShips({apiToken}) {
    const [resp, setResp] = useState("");
    const [form, setForm] = useState({ token: apiToken});

    return(<>
        <h3>View Your Ships</h3>
        <p>Lists all of the vessels under your agent's ownership.</p>
        <input name="api-token" placeholder="API Token" value={form.token} onChange={(e) => setForm({ ...form, token: e.currentTarget.value })} />

        <input type="submit" onClick={async () => {
            const resp = await fetch("https://api.spacetraders.io/v2/my/ships", {
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
export default ViewShips