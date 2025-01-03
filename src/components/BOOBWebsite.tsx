import { useState, useEffect } from 'react';
import { fetchPrices } from '../utils/priceService';
import Whitepaper from './Whitepaper';
import RatioCalculator from './RatioCalculator';
import HowToBuy from './HowToBuy';
import boobLogo from '../assets/boob-logo.png';

export default function BOOBWebsite() {
  const [currentPage, setCurrentPage] = useState('home');
  const [priceData, setPriceData] = useState({
    boob: { price: '0', marketCap: '0' },
    bob: { price: '0', marketCap: '0' }
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchPrices();
        setPriceData(data);
      } catch (error) {
        console.error('Error fetching price data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  const targetRatio = 88;
  const currentRatio = parseFloat(priceData.bob.marketCap) > 0 ? 
    (parseFloat(priceData.bob.marketCap) / parseFloat(priceData.boob.marketCap)).toFixed(0) : 
    '0';
  const requiredGrowth = parseFloat(currentRatio) > 0 ? 
    (parseFloat(currentRatio) / targetRatio).toFixed(1) : 
    '0';

  const formatPrice = (price: string) => {
    const numPrice = parseFloat(price);
    return numPrice < 0.01 ? 
      numPrice.toFixed(7) : 
      numPrice.toFixed(2);
  };

  const formatMarketCap = (marketCap: string) => {
    const numMarketCap = parseFloat(marketCap);
    return numMarketCap >= 1000000 ? 
      `${(numMarketCap / 1000000).toFixed(1)}M` : 
      `${(numMarketCap / 1000).toFixed(1)}K`;
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'whitepaper':
        return <Whitepaper />;
      case 'calculator':
        return <RatioCalculator />;
      case 'buy':
        return <HowToBuy />;
      default:
        return (
          <>
            {/* Market Data */}
            <div>
              <h2 className="text-xl mb-4">INFORMATION</h2>
              <div className="grid gap-2">
                <div className="flex justify-between border-b border-gray-800 py-2">
                  <span>BOOB:</span>
                  <span className={loading ? "animate-pulse" : ""}>
                    ${formatPrice(priceData.boob.price)}
                  </span>
                </div>
                <div className="flex justify-between border-b border-gray-800 py-2">
                  <span>BOB:</span>
                  <span className={loading ? "animate-pulse" : ""}>
                    ${formatPrice(priceData.bob.price)}
                  </span>
                </div>
                <div className="flex justify-between border-b border-gray-800 py-2">
                  <span>BOOB Market Cap:</span>
                  <span className={loading ? "animate-pulse" : ""}>
                    ${formatMarketCap(priceData.boob.marketCap)}
                  </span>
                </div>
                <div className="flex justify-between border-b border-gray-800 py-2">
                  <span>BOB Market Cap:</span>
                  <span className={loading ? "animate-pulse" : ""}>
                    ${formatMarketCap(priceData.bob.marketCap)}
                  </span>
                </div>
                <div className="flex justify-between border-b border-gray-800 py-2">
                  <span>Current Market Cap Ratio:</span>
                  <span className="text-red-400">{currentRatio}:1</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 py-2">
                  <span>Target Market Cap Ratio:</span>
                  <span className="text-green-400">{targetRatio}:1</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 py-2">
                  <span>Required Growth:</span>
                  <span className="text-yellow-400">{requiredGrowth}x</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 py-2">
                  <span>Target Market Cap:</span>
                  <span>${(parseFloat(priceData.boob.marketCap) * parseFloat(requiredGrowth) / 1000).toFixed(1)}K</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 py-2">
                  <span>BOOB Ledger:</span>
                  <span className="text-blue-400">337pe-iyaaa-aaaam-qcu7a-cai</span>
                </div>
              </div>
            </div>

            {/* Silver Thesis */}
            <div className="mt-8">
              <h2 className="text-xl mb-4">THE SILVER THESIS - WHY 88:1?</h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  Throughout history, gold and silver have maintained varying ratios - from 12:1 in the Roman Empire to modern markets averaging around 87:1. In the digital realm, BOOB aims to achieve a special ratio with BOB, the digital gold of Internet Computer:
                </p>
                
                <div className="my-4">
                  <div className="text-lg text-white">Target Ratio: 88:1 ⚖️</div>
                </div>

                <div>
                  <div className="text-lg text-white mb-2">The Numerical DNA 🧬</div>
                  <ul className="space-y-2">
                    <li>BOB = 808 (digital gold)</li>
                    <li>BOOB = 8008 (digital silver)</li>
                    <li>Dfinity = ∞ (infinity/sideways 8)</li>
                  </ul>
                </div>

                <p>
                  This perfect digital symmetry in the tokens' numerical DNA creates the natural 88:1 equilibrium target.
                </p>

                <div>
                  <div className="text-lg text-white mb-2">Current Status:</div>
                  <ul className="space-y-2">
                    <li>Market cap ratio: {currentRatio}:1</li>
                    <li>Required growth: {requiredGrowth}x</li>
                    <li>Target: 88:1</li>
                  </ul>
                </div>

                <p>
                  Just as precious metals have maintained their relationship through centuries, BOOB represents digital silver to BOB's established position as digital gold, with the 88:1 ratio serving as the natural balance point for this new digital era.
                </p>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="w-full bg-black text-white font-mono min-h-screen">
      <div className="max-w-[1000px] mx-auto px-4">
        {/* Header Box */}
        <div className="border border-gray-800 mt-4">
          <div className="flex justify-between items-start p-3">
            <div>
              <h1 className="text-2xl leading-none">BOB ON BOB</h1>
              <p className="text-sm mt-0.5">Digital Silver to BOB's Digital Gold</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-right">
                <div className="text-sm leading-tight">Ticker</div>
                <div>BOOB</div>
              </div>
              <div className="border-l border-gray-800 pl-3">
                <div className="text-sm leading-tight">Logo</div>
                <div className="w-7 h-7 bg-black flex items-center justify-center">
                  <img src={boobLogo} alt="BOOB Logo" className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Box */}
        <div className="border-x border-b border-gray-800">
          <div className="flex flex-wrap items-center justify-between px-3 py-2 text-sm sm:text-base sm:justify-start">
            <button 
              onClick={() => setCurrentPage('home')} 
              className={`${currentPage === 'home' ? "underline" : "hover:underline"} px-2 py-1 sm:mr-4`}
            >
              Home
            </button>
            <button 
              onClick={() => setCurrentPage('whitepaper')} 
              className={`${currentPage === 'whitepaper' ? "underline" : "hover:underline"} px-2 py-1 sm:mr-4`}
            >
              Whitepaper
            </button>
            <button 
              onClick={() => setCurrentPage('calculator')} 
              className={`${currentPage === 'calculator' ? "underline" : "hover:underline"} px-2 py-1 sm:mr-4 whitespace-nowrap`}
            >
              Ratio Calc
            </button>
            <button 
              onClick={() => setCurrentPage('buy')} 
              className={`${currentPage === 'buy' ? "underline" : "hover:underline"} px-2 py-1 whitespace-nowrap`}
            >
              How to Buy
            </button>
          </div>
        </div>

        {/* Main content */}
        <main className="py-4 border-x border-b border-gray-800 px-4">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
