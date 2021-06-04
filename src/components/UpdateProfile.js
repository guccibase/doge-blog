import React, { useRef, useState, useEffect } from "react";
import {
  Form,
  Button,
  Card,
  Alert,
  Container,
  Row,
  Image,
  Col,
} from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import UpdateProfileDetails from "../database/edit_profile";
import getUserDetails from "../database/get_user_details";
import dogeOne from "./../assets/doge-one.jpg";
import dogeTwo from "./../assets/doge-two.jpg";
import dogeThree from "./../assets/doge-three.jpg";
import dogeFour from "./../assets/doge-four.jpg";
import dogeFive from "./../assets/doge-five.jpg";
import dogeSix from "./../assets/doge-six.jpg";

export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const usernameRef = useRef();
  const bioRef = useRef();
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const avatars = [dogeOne, dogeTwo, dogeThree, dogeFour, dogeFive, dogeSix];
  const [selectedAvartar, setSelectedAvatar] = useState(<></>);
  const [avatarRef, setAvatarRef] = useState();
  const handleSelectAvatar = (avatar) => {
    setSelectedAvatar(
      <Image
        key="selected"
        className="justify-content-md-center mt-2 mb-2"
        src={avatar}
        roundedCircle
      />
    );
  };

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

  const [userDetails, setUserDetails] = useState({
    username: "",
    bio: "",
    avatar: "",
  });

  useEffect(() => {
    let isMounted = true;
    const getUser = async () => {
      const user = await getUserDetails(currentUser.uid);
      if (user) {
        setUserDetails(user);
        handleSelectAvatar(setProfileImage(user));
      }
    };
    if (isMounted) getUser();

    return () => {
      isMounted = false;
    };
  }, [currentUser.uid]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    setLoading(true);
    setError("");

    try {
      if (emailRef.current.value !== currentUser.email) {
        await updateEmail(emailRef.current.value);
      }
      if (passwordRef.current.value) {
        await updatePassword(passwordRef.current.value);
      }
      await UpdateProfileDetails(currentUser.uid, {
        username: usernameRef.current.value,
        email: emailRef.current.value,
        bio: bioRef.current.value,
        avatar: avatarRef,
      });
      setLoading(false);
      history.push("/profile");
    } catch (error) {
      setError("Failed to update account");
    }
  }

  return (
    <Container className="auth-container">
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Update Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                required
                defaultValue={currentUser.email}
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                placeholder="Leave blank to keep the same"
              />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                ref={passwordConfirmRef}
                placeholder="Leave blank to keep the same"
              />
            </Form.Group>
            <Form.Group id="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                ref={usernameRef}
                defaultValue={userDetails.username}
                required
              />
            </Form.Group>
            <Form.Group id="bio">
              <Form.Label>Bio</Form.Label>
              <Form.Control
                defaultValue={userDetails.bio}
                type="text"
                ref={bioRef}
              />
            </Form.Group>
            <Form.Group id="avatar">
              <Form.Label>Select your DOGE avatar</Form.Label>
              <Container>
                <Row className="justify-content-md-center">
                  {avatars.map((avatar, i) => (
                    <Col key={i} xs={6} md={4}>
                      <Image
                        src={avatar}
                        onClick={() => {
                          setAvatarRef(i);
                          console.log(avatarRef);
                          handleSelectAvatar(avatar);
                        }}
                        thumbnail
                      />
                    </Col>
                  ))}
                  {selectedAvartar}
                </Row>
              </Container>
            </Form.Group>
            <Button
              disabled={loading}
              className="w-100 btn-light filter-btn"
              type="submit"
            >
              Update
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link to="/profile" className="cancel">
          Cancel
        </Link>
      </div>
    </Container>
  );
}
