import React from 'react';
import "./Coin.css";




export default function Coin({name, symbol, price, priceChange, marketcap, volume}) {
    
    //const Coin = ({ name, image, symbol, price, volume, priceChange, marketcap}) => {

    return (
        <div>
            <h2>{name}</h2>
        <div className="gridParent">
            <div className='coin-volume'> Marktvolumen: EUR <div> {volume.toLocaleString()}</div></div>
            {priceChange < 0 ? (
                        <div className='coin-percent'> Entwicklung 24h: <div className='coin-percent red'>{priceChange.toFixed(2)}%</div></div>
                    ) : (
                        <div className='coin-percent'> Entwicklung 24h:<div className='coin-percent green'>{priceChange.toFixed(2)}%</div></div>
                    )}
                    <div className='coin-marketcap'>    Mkt Cap: EUR    <div>{marketcap.toLocaleString()}</div></div>           
            <div className="coin-price">Aktueller Kurs: EUR <div>{price}  </div></div>
            {/* <div className="coin-volume"> EUR {volume.toLocaleString()}  </div>         */}
        </div>
        </div>            
    )
}
