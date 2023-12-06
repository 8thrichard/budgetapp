const ALPHA_VANTAGE_API_URL = 'https://www.alphavantage.co/query';

export const fetchStockData = async (symbol: string, apiKey: string) => {
  const response = await fetch(
    `${ALPHA_VANTAGE_API_URL}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch stock data');
  }

  const data = await response.json();
  return data['Global Quote'];
};
