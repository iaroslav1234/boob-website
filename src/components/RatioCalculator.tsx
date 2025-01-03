import { useState, useEffect } from 'react';
import { fetchPrices } from '../utils/priceService';

export default function RatioCalculator() {
  const [investment, setInvestment] = useState('');
  const [priceData, setPriceData] = useState({
    boob: { price: '0', marketCap: '0' },
    bob: { price: '0', marketCap: '0' }
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPrices();
        console.log('Fetched price data:', data);
        setPriceData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching prices:', error);
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  const calculateMetrics = () => {
    const targetRatio = 88;
    const currentRatio = loading ? '0' : (parseFloat(priceData.bob.marketCap) / parseFloat(priceData.boob.marketCap)).toFixed(0);
    const growthMultiplier = loading || parseFloat(currentRatio) === 0 ? '0' : (parseFloat(currentRatio) / targetRatio).toFixed(1);

    if (!investment || loading) {
      return {
        boobTokens: '0',
        currentRatio,
        targetRatio,
        growthMultiplier,
        potentialValue: '0'
      };
    }

    const investmentAmount = parseFloat(investment);
    const boobPrice = parseFloat(priceData.boob.price);
    const boobTokens = (investmentAmount / boobPrice).toFixed(2);
    const potentialValue = (investmentAmount * parseFloat(growthMultiplier)).toFixed(2);

    return {
      boobTokens,
      currentRatio,
      targetRatio,
      growthMultiplier,
      potentialValue
    };
  };

  const metrics = calculateMetrics();

  return (
    <div>
      <h2 className="text-xl mb-4">RATIO CALCULATOR</h2>
      
      <div>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg mb-2">Investment Amount (USD)</h3>
            <input
              type="number"
              value={investment}
              onChange={(e) => setInvestment(e.target.value)}
              className="w-full bg-gray-900 border border-gray-800 rounded p-2 text-white"
              placeholder="Enter investment amount"
            />
          </div>

          <div>
            <h3 className="text-lg mb-4">Potential Returns</h3>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-gray-800 py-2">
                <span>BOOB Tokens:</span>
                <span className="text-white text-xl">
                  {parseFloat(metrics.boobTokens).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                </span>
              </div>
              <div className="flex justify-between border-b border-gray-800 py-2">
                <span>Current Market Cap Ratio:</span>
                <span className={`text-red-400 text-xl ${loading ? "animate-pulse" : ""}`}>
                  {metrics.currentRatio}:1
                </span>
              </div>
              <div className="flex justify-between border-b border-gray-800 py-2">
                <span>Target Market Cap Ratio:</span>
                <span className="text-green-400 text-xl">
                  {metrics.targetRatio}:1
                </span>
              </div>
              <div className="flex justify-between border-b border-gray-800 py-2">
                <span>Growth Multiplier:</span>
                <span className={`text-yellow-400 text-xl ${loading ? "animate-pulse" : ""}`}>
                  {metrics.growthMultiplier}x
                </span>
              </div>
              <div className="flex justify-between border-b border-gray-800 py-2">
                <span>Potential Value:</span>
                <span className="text-green-400 text-xl">
                  ${parseFloat(metrics.potentialValue).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                </span>
              </div>
            </div>
          </div>

          <div className="text-sm text-gray-400">
            <p>
              *Calculations are based on the numerical DNA of BOB and BOOB
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-800 rounded">
        <h3 className="text-lg text-white mb-3">The Numerical DNA 🧬</h3>
        <div className="space-y-3 text-gray-400">
          <ul className="space-y-2">
            <li>BOB = 808 (digital gold)</li>
            <li>BOOB = 8008 (digital silver)</li>
            <li>Dfinity = ∞ (infinity/sideways 8)</li>
          </ul>
          <p>This perfect digital symmetry in the tokens' numerical DNA creates the natural 88:1 equilibrium target.</p>
        </div>
      </div>
    </div>
  );
}
