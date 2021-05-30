import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./profile.css";

function ProfileButtons() {
  const { logout } = useAuth();

  async function handleSignout(e) {
    e.preventDefault();
    try {
      await logout();
      //history.push("/")
    } catch {
      console.log("Failed to log in");
    }
  }

  return (
    <>
      <Link className="edit-profile account mr-2" to="/update-profile">
        Edit profile
      </Link>

      <span onClick={handleSignout}>
        {" "}
        <Link className="account" to="/">
          Sign out
        </Link>
      </span>
    </>
  );
}

export default ProfileButtons;
