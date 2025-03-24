import { useEffect } from 'react';

const TradingViewWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `
      {
        "symbols": [
          {"proName": "FOREXCOM:SPXUSD", "title": "S&P 500"},
          {"proName": "FOREXCOM:NSXUSD", "title": "Nasdaq 100"},
          {"proName": "FX_IDC:EURUSD", "title": "EUR/USD"},
          {"proName": "BITSTAMP:BTCUSD", "title": "Bitcoin"},
          {"proName": "BITSTAMP:ETHUSD", "title": "Ethereum"},
          {"proName": "BINANCE:SOLUSDT", "title": "Solana"},
          {"proName": "BINANCE:ADAUSDT", "title": "Cardano"},
          {"proName": "BINANCE:DOGEUSDT", "title": "Dogecoin"},
          {"proName": "BINANCE:MATICUSDT", "title": "Polygon"},
          {"proName": "BINANCE:AVAXUSDT", "title": "Avalanche"},
          {"proName": "BINANCE:DOTUSDT", "title": "Polkadot"},
          {"proName": "BINANCE:LINKUSDT", "title": "Chainlink"},
          {"proName": "BINANCE:UNIUSDT", "title": "Uniswap"},
          {"proName": "BINANCE:ATOMUSDT", "title": "Cosmos"},
          {"proName": "BINANCE:AAVEUSDT", "title": "Aave"}
        ],
        "showSymbolLogo": true,
        "isTransparent": false,
        "displayMode": "adaptive",
        "colorTheme": "dark",
        "locale": "en"
      }`;

    const widgetContainer = document.getElementsByClassName('tradingview-widget-container__widget')[0];
    if (widgetContainer) {
      widgetContainer.appendChild(script);
    }

    return () => {
      if (widgetContainer && script) {
        widgetContainer.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container w-full bg-black/50 backdrop-blur-md">
      <div className="tradingview-widget-container__widget h-10"></div>
    </div>
  );
};

export default TradingViewWidget;
