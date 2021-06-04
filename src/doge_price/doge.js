import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

async function getDogecoinPrice() {
  try {
    const response = await axios.get(
      "https://chain.so/api/v2/get_price/DOGE/USD"
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return {
      status: "success",
      data: {
        network: "DOGE",
        prices: [
          {
            price: "0.37684",
            price_base: "USD",
            exchange: "binance",
            time: 1622770233,
          },
          {
            price: "0.37761",
            price_base: "USD",
            exchange: "gemini",
            time: 1622770243,
          },
        ],
      },
    };
  }
}

export default getDogecoinPrice;
