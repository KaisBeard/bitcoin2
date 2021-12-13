import './App.css';
import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";
import Coin from "./Coin"

function App() {
  const [coins, setCoins] = useState ([])
  const [search, setSearch]= useState("")

useEffect(() => {
  axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=EUR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  .then(res =>
    {setCoins(res.data);
  }).catch(error => console.log(error))
}, []);

  const handleChange = e => {

    setSearch(e.target.value)
  }

const filteredCoins = coins.filter(coin =>
  coin.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    
<div className="App">
      <div className="coin-search">
      <h1 className="coin-text">Kryptowährung suchen</h1>
      <form>
        <input type="text" placeholder="Suche Kryptowährung" className='coin-input' onChange = {handleChange}  />
      </form>
    </div>

    </div>
  );












}

export default App;
