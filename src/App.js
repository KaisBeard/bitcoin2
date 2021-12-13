import './App.css';
import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";

function App() {
  const [coins, setCoins] = useState ([])

useEffect(() => {
  axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=EUR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  .then(res =>
    {setCoins(res.data);
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
