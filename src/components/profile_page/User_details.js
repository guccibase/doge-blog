import React, { useState, useEffect } from "react";
import { Card, Image } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import getUserDetails from "../../database/get_user_details";

function UserDetails() {
  const { currentUser } = useAuth();
  const [userDetails, setUserDetails] = useState({
    username: "",
    bio: "",
    avatar: "",
  });

  useEffect(() => {
    let isMounted = true;

    const getUser = async () => {
      const user = await getUserDetails(currentUser.uid);

      setUserDetails(user);
    };
    if (isMounted) getUser();
    return () => {
      return (isMounted = false);
    };
  }, []);

  return (
    <Card className="mb-4">
      <Card.Body>
        <div className="text-center">
          <Image className="avatar lg" src={userDetails.avatar} roundedCircle />
        </div>
        <h3 className="text-center tracker">{userDetails.username}</h3>
        <Card.Text className="text-center high"></Card.Text>
        <Card.Text className="text-center low">{userDetails.bio}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default UserDetails;
