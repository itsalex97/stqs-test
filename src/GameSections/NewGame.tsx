import { useState } from "react"

/**
 * This component is a basic MVP of part one of the quickstart. It handles registering your agent and receives a token
 * which you will need to use in subsequent calls. Therefore, you might want to refactor or replace this as you move forward.
 */

function NewGame({apiToken, setToken, sysSymbol, setSysSymbol, waypointSymbol, setWaypointSymbol}) {
  const [resp, setResp] = useState("");
  const [form, setForm] = useState({ symbol: "", faction: "COSMIC" });

  return (<>
    <h1>New Game</h1>
    <input name="symbol" placeholder="Username" value={form.symbol} onChange={(e) => setForm({ ...form, symbol: e.currentTarget.value })} />
    <input name="faction" placeholder="Faction" value={form.faction} onChange={(e) => setForm({ ...form, faction: e.currentTarget.value })} />
    <input type="submit" onClick={async () => {
      const resp = await fetch("https://api.spacetraders.io/v2/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          symbol: form.symbol,
          faction: form.faction,
        }),
      });

      const json = await resp.json();

      if (resp.ok) {
        setToken(json.data.token);
        setSysSymbol(json.data.ship.nav.systemSymbol);
        setWaypointSymbol(json.data.ship.nav.waypointSymbol);

      }

      setResp(JSON.stringify(json, null, 2))
    }} />
    <pre>API token: {apiToken}</pre>
    <pre>Response: {resp}</pre>
  </>)
}

export default NewGame