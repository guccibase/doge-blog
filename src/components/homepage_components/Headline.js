import React, { useState, useEffect } from "react";
import "./headline.css";
import { Image, Navbar } from "react-bootstrap";
import doge from "./../../assets/doge.png";
import getHeadline from "../../database/get_greeting";
import { divider } from "@uiw/react-md-editor";

function Headline() {
  const [headline, setHeadline] = useState("");
  useEffect(() => {
    const fetctGreeting = async () => {
      const text = getHeadline();
      setHeadline(text);
    };
    fetctGreeting();
  });
  return (
    <div className="app-headline">
      <h2>{headline}</h2>
    </div>
  );
}

export default Headline;
