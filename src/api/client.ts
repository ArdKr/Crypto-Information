// API Details
const API_BASE_URL =
  "https://thingproxy.freeboard.io/fetch/https://pro-api.coinmarketcap.com/v1/cryptocurrency/";
const API_KEY = "3bb029e6-0493-4b09-9e92-e383fb9e0bd6";
const API_KEY_PARAM = `?CMC_PRO_API_KEY=${API_KEY}`;
const API_LISTING_URL = `${API_BASE_URL}listings/latest${API_KEY_PARAM}`;
const API_CRYPTO_METADATA_URL = `${API_BASE_URL}info${API_KEY_PARAM}`;

// Gets all active cryptocurrencies
export const fetchAllActiveCryptos = async () => {
  const apiResults = await (await fetch(API_LISTING_URL)).json();

  return apiResults;
};

// Gets information about a specific Cryptocurrency
export const fetchCryptoMetadata = async (id: number) => {
  const apiResults = await (
    await fetch(`${API_CRYPTO_METADATA_URL}&id=${id}`)
  ).json();

  return apiResults;
};
