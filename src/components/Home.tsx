import { useEffect, useState } from 'react';
import { fetchPrices } from '../utils/priceService';

export default function Home() {
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

  const targetRatio = 87;
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

  return (
    <div>
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
        <h2 className="text-xl mb-4">THE SILVER THESIS</h2>
        <div className="space-y-4 text-gray-400">
          <p>
            Throughout history, silver has maintained an 87:1 ratio with gold. In the digital realm,
            BOOB aims to achieve this natural ratio with BOB, the digital gold of Internet Computer.
          </p>
          <p>
            Current market dynamics show significant market cap undervaluation at {currentRatio}:1. A {requiredGrowth}x growth
            is required to reach the historical gold-silver ratio, suggesting strong upside potential.
          </p>
          <p>
            As the first token launched on the BOB ecosystem, BOOB represents digital silver
            to BOB's established position as digital gold.
          </p>
        </div>
      </div>
    </div>
  );
}
