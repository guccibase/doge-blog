import React, { useState, useEffect } from "react";
import "./App_title.css";
import { Image } from "react-bootstrap";
import doge from "./../../assets/doge.png";
import { useHistory } from "react-router-dom";
import getGreeting from "../../database/get_greeting";

function AppTitle() {
  const history = useHistory();
  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    const fetctGreeting = async () => {
      const text = await getGreeting();
      setGreeting(text);
    };
    fetctGreeting();
  });
  return (
    <div className="mb-4" onClick={() => history.push("/")}>
      <h1 className="app-title">
        <Image className="rounded-circle" src={doge}></Image> blog{" "}
        <span className="greeting">{greeting}</span>
      </h1>
    </div>
  );
}

export default AppTitle;
