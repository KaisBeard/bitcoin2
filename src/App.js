import './App.css';
import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";
import Coin from "./Coin";

function App() {
  const [coins, setCoins] = useState ([])
  const [search, setSearch]= useState("")

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=EUR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res =>
      {setCoins(res.data);
    }).catch(error => console.log(error))
  }, []);

  console.log(coins);

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <div>
      <div className="App">
        <div className="coin-search">
          <h1 className="coin-text">Crypto Tracker</h1>
          <form>
            <input type="text" placeholder="Suche Kryptowährung" className='coin-input' onChange = {handleChange}  />
          </form>
        </div>
      </div>     
    

      {filteredCoins.map(coin => {
        return (
          <Coin 
              key={coin.id} 
              name={coin.name} 
              // image={coin.image}
              symbol={coin.symbol}
              volume={coin.market_cap}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              marketcap={coin.total_volume}
              />
          );
      })}
    </div>
  );
}

export default App;


/*

 {filteredCoins.map(coin => {
        return (
          <div>hallo</div>
      

<Coin 
          key={coin.id} 
          name={coin.name} 
          image={coin.image}
          symbol={coin.symbol}
          volume={coin.market_cap}
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h}
          marketcap={coin.total_volume}
          />
  );
      })}

*/