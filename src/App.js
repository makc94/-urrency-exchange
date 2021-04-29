import React, { useState } from "react";

export default function App() {
  const [ukr, setUkr] = useState("");
  const [dol, setDol] = useState("");

  const toDollar = (e) => {
    const cur = e.target.value;
    setUkr(cur);
    setDol(cur / 27.8);
  };

  const toGrivna = (e) => {
    const cur = e.target.value;
    setDol(cur);
    setUkr(cur * 26.8);
  };

  return (
    <div>
      <form>
        <label>
          <span>Grivna: </span>
          <input type="text" value={ukr} onChange={toDollar} />
        </label>
        <label>
          <span>Dollar: </span>
          <input type="text" value={dol} onChange={toGrivna} />
        </label>
      </form>
    </div>
  );
}
