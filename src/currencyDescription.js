import './App.css';
import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";

function currencyDescription(currencyName) {
  const [currencyData, setCurrencyData] = useState ([])

  const currencyUrl ="https://api.coingecko.com/api/v3/coins/";

useEffect(() => {
  axios.get(`${currencyUrl}${currencyName}`)
  .then(res =>
    {setCurrencyData(res.data);
  }).catch(error => console.log(error))
}, []);

  

  return (
    <div className="App">
      <header className="App-header">
        hallo
      </header>

    </div>
  );
}

export default App;
