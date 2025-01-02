export default function HowToBuy() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl mb-4">HOW TO BUY</h2>
      
      <div className="space-y-8 text-gray-400">
        <section>
          <h3 className="text-lg text-white mb-2">1. Set Up Your Wallet</h3>
          <div className="space-y-2">
            <p>First, you'll need to set up a Plug wallet:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>Visit <a href="https://plugwallet.ooo/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">https://plugwallet.ooo</a></li>
              <li>Install the browser extension</li>
              <li>Create a new wallet or import an existing one</li>
              <li>Fund your wallet with ICP</li>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="text-lg text-white mb-2">2. Get BOB</h3>
          <div className="space-y-2">
            <p>You'll need BOB to trade for BOOB:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>Visit <a href="https://sonic.ooo/swap" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Sonic</a></li>
              <li>Connect your Plug wallet</li>
              <li>Swap ICP for BOB</li>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="text-lg text-white mb-2">3. Buy BOOB</h3>
          <div className="space-y-2">
            <p>Now you can buy BOOB:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>Go to <a href="https://sonic.ooo/swap" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Sonic</a></li>
              <li>Select BOB as the input token</li>
              <li>Select BOOB as the output token</li>
              <li>Enter the amount you want to swap</li>
              <li>Click "Swap" and confirm the transaction</li>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="text-lg text-white mb-2">4. Track Your Investment</h3>
          <div className="space-y-2">
            <p>Monitor your BOOB investment:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>Use the Ratio Calculator on this site to ensure optimal BOB:BOOB ratio</li>
              <li>Check prices and market caps on the home page</li>
              <li>Monitor your wallet balance in Plug</li>
            </ul>
          </div>
        </section>

        <div className="mt-8 p-4 bg-gray-900 rounded-lg">
          <p className="text-yellow-400 font-semibold">Important:</p>
          <ul className="list-disc pl-4 mt-2 space-y-1">
            <li>Always verify contract addresses</li>
            <li>Never share your private keys or seed phrase</li>
            <li>Start with a small amount to test the process</li>
            <li>Keep track of your transactions for tax purposes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
