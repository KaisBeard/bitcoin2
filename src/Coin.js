

const Coin = ({ name, image, symbol, price, volume, priceChange, marketcap}) => {










<p className='coin-volume'>${volume.toLocaleString()}</p>
{priceChange < 0 ? (
            <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
          )}
         <p className='coin-marketcap'>
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>