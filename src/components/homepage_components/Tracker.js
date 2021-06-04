import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import dogePrice from "../../doge_price/doge";

function Tracker() {
  const [tracker, setTracker] = useState({
    prices: [
      {
        price: "0.00000",
        price_base: "USD",
        exchange: "binance",
      },
      {
        price: "0.00000",
        price_base: "USD",
        exchange: "gemini",
      },
    ],
  });

  useEffect(() => {
    async function updatePrice() {
      const { data } = await dogePrice();
      setTracker(data);
    }
    async function getDogecoinPrice() {
      const { data } = await dogePrice();
      setTracker(data);
    }
    getDogecoinPrice();
    setInterval(() => updatePrice(), 10000);
  }, []);

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Subtitle className="text-center">Live tracker</Card.Subtitle>
        <h3 className="text-center tracker">
          ${Number.parseFloat(tracker.prices[0].price).toFixed(5)}
        </h3>
        <Card.Text className="text-center high">Exchange: Binance</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Tracker;
