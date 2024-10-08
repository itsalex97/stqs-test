import { useState } from "react"

function Agent({apiToken}) {
    const [resp, setResp] = useState("");
    const [form, setForm] = useState({token: apiToken});

    return(<>
      <h3>View Agent</h3>
      <p>Enter the API token you received from registering your account and view your Agent's details.</p>
        <input name="api-token" placeholder="API Token" value={form.token} onChange={(e) => setForm({ ...form, token: e.currentTarget.value })} />

        <input type="submit" onClick={async () => {
          const resp = await fetch("https://api.spacetraders.io/v2/my/agent", {
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
export default Agent