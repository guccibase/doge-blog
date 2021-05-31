import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./profile.css";

function ProfileButtons() {
  const { logout } = useAuth();
  const history = useHistory();

  async function handleSignout(e) {
    e.preventDefault();
    try {
      await logout();
      history.push("/");
    } catch {
      console.log("Failed to log in");
    }
  }

  return (
    <>
      <Link className="edit-profile account mt-2" to="/update-profile">
        Edit profile
      </Link>
      <span className="mt-2" onClick={handleSignout}>
        <Link className="account ml-2 mr-4 mt-2">Sign out</Link>
      </span>
    </>
  );
}

export default ProfileButtons;
