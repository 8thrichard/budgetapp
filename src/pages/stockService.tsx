/**
 * The base URL for the Alpha Vantage API.
 */
const ALPHA_VANTAGE_API_URL = 'https://www.alphavantage.co/query';

/**
 * Fetches stock data for a given symbol using the Alpha Vantage API.
 * @param symbol - The stock symbol for which to fetch data (e.g., 'AAPL' for Apple Inc.).
 * @param apiKey - The API key required for accessing the Alpha Vantage API.
 * @returns A Promise that resolves to the stock data for the specified symbol.
 * @throws An error with a descriptive message if the API request fails or returns an error status.
 */
export const fetchStockData = async (symbol: string, apiKey: string) => {
  try {
    // Construct the API URL with the provided symbol and API key.
    const apiUrl = `${ALPHA_VANTAGE_API_URL}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;

    // Fetch data from the Alpha Vantage API.
    const response = await fetch(apiUrl);

    // Check if the API request was successful (status code 200).
    if (!response.ok) {
      const errorMessage = `Failed to fetch stock data. Status: ${response.status}, ${response.statusText}`;
      throw new Error(errorMessage);
    }

    // Parse the JSON response and extract the 'Global Quote' data.
    const data = await response.json();

    // Check if the API response contains an error message.
    if (data['Error Message']) {
      const apiErrorMessage = `Alpha Vantage API Error: ${data['Error Message']}`;
      throw new Error(apiErrorMessage);
    }

    // Return the 'Global Quote' data.
    return data['Global Quote'];
  } catch (error: any) {
    // If any error occurs during the process, throw an error with a descriptive message.
    const errorMessage = `Failed to fetch stock data: ${error.message}`;
    throw new Error(errorMessage);
  }
};
