export interface PriceData {
  price: string;
  marketCap: string;
}

export interface Prices {
  boob: PriceData;
  bob: PriceData;
}

export async function fetchPrices(): Promise<Prices> {
  try {
    const [boobResponse, bobResponse] = await Promise.all([
      fetch('https://api.dexscreener.com/latest/dex/pairs/icp/inqfk-jiaaa-aaaag-qnd5q-cai'),  // BOOB API
      fetch('https://api.dexscreener.com/latest/dex/pairs/icp/ybilh-nqaaa-aaaag-qkhzq-cai')   // BOB API
    ]);

    const boobData = await boobResponse.json();
    const bobData = await bobResponse.json();

    console.log('Raw BOOB Data:', boobData);
    console.log('Raw BOB Data:', bobData);

    // Extract the first pair from each response
    const boobPair = boobData.pairs?.[0];
    const bobPair = bobData.pairs?.[0];

    if (!boobPair || !bobPair) {
      throw new Error('Invalid response format');
    }

    // Use priceUsd and fdv (Fully Diluted Valuation) from the API response
    return {
      boob: {
        price: boobPair.priceUsd || '0',
        marketCap: boobPair.fdv?.toString() || '0'
      },
      bob: {
        price: bobPair.priceUsd || '0',
        marketCap: bobPair.fdv?.toString() || '0'
      }
    };
  } catch (error) {
    console.error('Error fetching prices:', error);
    // Return zeros if there's an error
    return {
      boob: { price: '0', marketCap: '0' },
      bob: { price: '0', marketCap: '0' }
    };
  }
}
