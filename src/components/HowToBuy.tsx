export default function HowToBuy() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl mb-6">📱 How to Buy $BOOB on ICPSwap Using Internet Identity</h1>

      <section>
        <h2 className="text-xl text-white mb-4">1️⃣ Create Internet Identity</h2>
        <ul className="space-y-2 text-gray-400">
          <li>Go to: <a href="https://identity.ic0.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">https://identity.ic0.app/</a></li>
          <li>Click "Create New"</li>
          <li>Follow security prompts</li>
          <li>Save your anchor number safely</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl text-white mb-4">2️⃣ Connect to ICPSwap</h2>
        <ul className="space-y-2 text-gray-400">
          <li>Visit ICPSwap: <a href="https://app.icpswap.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">https://app.icpswap.com/</a></li>
          <li>Click "Connect Wallet"</li>
          <li>Select "Internet Identity"</li>
          <li>Sign in with your anchor number</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl text-white mb-4">3️⃣ Add ICP to Your Account</h2>
        <ul className="space-y-2 text-gray-400">
          <li>Get your ICP deposit address from ICPSwap</li>
          <li>Send ICP to this address</li>
          <li>Wait for confirmation (usually quick)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl text-white mb-4">4️⃣ Navigate to BOOB Trading</h2>
        <ul className="space-y-2 text-gray-400">
          <li>Go to direct swap link:<br/>
            <a 
              href="https://app.icpswap.com/swap/pro?input=ryjl3-tyaaa-aaaaa-aaaba-cai&output=337pe-iyaaa-aaaam-qcu7a-cai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline break-all"
            >
              https://app.icpswap.com/swap/pro?input=ryjl3-tyaaa-aaaaa-aaaba-cai&output=337pe-iyaaa-aaaam-qcu7a-cai
            </a>
          </li>
          <li>Or search for BOOB token: <span className="text-blue-400">337pe-iyaaa-aaaam-qcu7a-cai</span></li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl text-white mb-4">5️⃣ Make Your Swap</h2>
        <ul className="space-y-2 text-gray-400">
          <li>Enter how much ICP you want to swap</li>
          <li>Review the BOOB amount you'll receive</li>
          <li>Click "Swap"</li>
          <li>Confirm via Internet Identity</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl text-white mb-4">💡 Tips</h2>
        <ul className="space-y-2 text-gray-400">
          <li>Keep some ICP for transaction fees</li>
          <li>Double check the BOOB contract address</li>
          <li>Start with a small test transaction</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl text-white mb-4">🔍 Post-Purchase</h2>
        <ul className="space-y-2 text-gray-400">
          <li>Your BOOB will appear in your ICPSwap wallet</li>
          <li>Monitor the BOB/BOOB ratio (target: 88:1)</li>
          <li>Track your investment in ICPSwap portfolio</li>
        </ul>
      </section>

      <div className="text-gray-400 italic mt-8">
        Not financial advice. DYOR 🚀
      </div>
    </div>
  );
}
