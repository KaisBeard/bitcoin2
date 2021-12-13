import React from 'react';
import "./Coin.css";




export default function Coin({name, image, symbol, price, priceChange, marketcap, volume}) {
    
    //const Coin = ({ name, image, symbol, price, volume, priceChange, marketcap}) => {

    return (
        <div>
            <div className='coin-volume'>${volume.toLocaleString()}</div>
            {priceChange < 0 ? (
                        <div className='coin-percent red'>{priceChange.toFixed(2)}%</div>
                    ) : (
                        <div className='coin-percent green'>{priceChange.toFixed(2)}%</div>
                    )}
                    <div className='coin-marketcap'> Mkt Cap: ${marketcap.toLocaleString()}</div>



            <div className="coin-container">
                <div className="coin-row">
                    <div className="coin">
                        <img sc={image} alt="crypto" />
                        <h1>{name}</h1>
                        <p className= "coin-symbol" > {symbol} </p>
                    </div>

                    <div className="coin-data">
                        <div className="coin-price">$ {price}  </div>
                        <div className="coin-volume">$ {volume.toLocaleString()}  </div>        
                    </div>
                </div>
            </div>
        </div>            
    )
}
