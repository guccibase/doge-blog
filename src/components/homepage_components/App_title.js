import React, { useState, useEffect } from "react";
import "./App_title.css";
import { Image, Navbar } from "react-bootstrap";
import doge from "./../../assets/doge.png";
import { useHistory } from "react-router-dom";
import getGreeting from "../../database/get_greeting";

function AppTitle() {
  const history = useHistory();
  // const [greeting, setGreeting] = useState("");
  // useEffect(() => {
  //   const fetctGreeting = async () => {
  //     const text = await getGreeting();
  //     setGreeting(text);
  //   };
  //   fetctGreeting();
  // });
  return (
    <Navbar>
      <div className="mb-4" onClick={() => history.push("/")}>
        <h1 className="app-title">
          <Image className="rounded-circle" src={doge}></Image> blog{" "}
          <Navbar.Text className="greeting">
            {"where doge ideas meet"}
          </Navbar.Text>
        </h1>
      </div>
    </Navbar>
  );
}

export default AppTitle;
