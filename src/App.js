import React, { useState, useEffect } from "react";
import "./index.css";

export default function App() {
  const [ukr, setUkr] = useState("");
  const [dol, setDol] = useState("");
  const [kyrsDol, setKyrsDol] = useState("");

  useEffect(() => {
    const URLrequest =
      "http://api.currencylayer.com/live?access_key=ff13dab9da2cea673aecc73c898e4daa&currencies=USD,UAH";
    fetch(URLrequest)
      .then((response) => response.json())
      .then((res) => {
        setKyrsDol(res.quotes.USDUAH);
      });
  }, []);

  const toDollar = (e) => {
    const cur = e.target.value;
    setUkr(cur);
    setDol(cur / kyrsDol);
  };

  const toGrivna = (e) => {
    const cur = e.target.value;
    setDol(cur);
    setUkr(cur * kyrsDol);
  };

  const toggle = () => {
    document.body.classList.toggle("dark");

    // const flip = document.getElementById("button");
    // flip.classList.add("flip");
  };

  return (
    <div className="container">
      <div className="d-flex align-items-center common">
        <div className="col">
          <label>
            <span className="display-6">Grivna: </span>
            <input
              className="form-control fadeInLeftBig"
              type="text"
              value={ukr}
              placeholder="uah"
              onChange={toDollar}
            />
          </label>
        </div>
        <div className="col">
          <label>
            <span className="display-6">Dollar: </span>
            <input
              className="form-control fadeInDownBig"
              type="text"
              value={dol}
              placeholder="usd"
              onChange={toGrivna}
            />
          </label>
        </div>
      </div>
      <div className="col click">
        <button
          id="button"
          type="button"
          className="btn btn-primary flip"
          onClick={toggle}
        >
          Change theme
        </button>
      </div>
    </div>
  );
}
