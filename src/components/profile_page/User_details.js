import React, { useState, useEffect } from "react";
import { Card, Image } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import getUserDetails from "../../database/get_user_details";
import dogeOne from "../../assets/doge-one.jpg";
import dogeTwo from "../../assets/doge-two.jpg";
import dogeThree from "../../assets/doge-three.jpg";
import dogeFour from "../../assets/doge-four.jpg";
import dogeFive from "../../assets/doge-five.jpg";
import dogeSix from "../../assets/doge-six.jpg";

function UserDetails() {
  const { currentUser } = useAuth();
  const [userDetails, setUserDetails] = useState({
    username: "",
    bio: "",
  });

  useEffect(() => {
    let isMounted = true;

    const getUser = async () => {
      const user = await getUserDetails(currentUser.uid);
      const avatar = setProfileImage(user);

      setUserDetails({
        username: user.username,
        bio: user.bio,
        avatar: avatar,
      });
    };
    if (isMounted) getUser();
    return () => {
      return (isMounted = false);
    };
  }, []);

  const setProfileImage = (user) => {
    switch (user.avatar) {
      case 0:
        return dogeOne;
        break;
      case 1:
        return dogeTwo;

        break;
      case 2:
        return dogeThree;

        break;
      case 3:
        return dogeFour;

        break;
      case 4:
        return dogeFive;

        break;
      case 5:
        return dogeSix;

        break;

      default:
        break;
    }
  };
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
