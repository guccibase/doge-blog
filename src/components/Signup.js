import React, { useRef, useState } from "react";
import {
    Form,
    Button,
    Card,
    Alert,
    Container,
    Row,
    Col,
    Image
} from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import createUserProfile from "../database/create_user_profile";
import "../components/screens/sign-up.css";
import dogeOne from "./../assets/doge-one.jpg";
import dogeTwo from "./../assets/doge-two.jpg";
import dogeThree from "./../assets/doge-three.jpg";
import dogeFour from "./../assets/doge-four.jpg";
import dogeFive from "./../assets/doge-five.jpg";
import dogeSix from "./../assets/doge-six.jpg";
import verifyUsername from "../database/verify_username";
export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const usernameRef = useRef();
    const bioRef = useRef();
    const [avatarRef, setAvatarRef] = useState(0);
    const { signup } = useAuth();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const avatars = [dogeOne, dogeTwo, dogeThree, dogeFour, dogeFive, dogeSix];
    const [selectedAvartar, setSelectedAvatar] = useState(<></>);

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
    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match");
        } else {
            try {
                setError("");
                const usernameExists = await verifyUsername(
                    usernameRef.current.value
                );
                if (usernameExists) {
                    console.log(usernameExists);
                    setError("Username not available");
                    return;
                } else {
                    setError("");
                    console.log(usernameExists);
                }
                setLoading(true);
                const userId = await signup(
                    emailRef.current.value,
                    passwordRef.current.value
                );
                if (!userId) throw error;
                console.log(userId);
                if (userId)
                    await createUserProfile(userId, {
                        username: usernameRef.current.value,
                        email: emailRef.current.value,
                        bio: bioRef.current.value,
                        avatar: avatarRef
                    });
                history.push("/");
            } catch {
                setError("Failed to create an account");
            }
        }

        setLoading(false);
    }

    return (
        <Container className="auth-container">
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                ref={emailRef}
                                required
                            />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>
                                Password (must be at least 6 characters)
                            </Form.Label>
                            <Form.Control
                                type="password"
                                ref={passwordRef}
                                required
                            />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control
                                type="password"
                                ref={passwordConfirmRef}
                                required
                            />
                        </Form.Group>
                        <Form.Group id="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                ref={usernameRef}
                                required
                            />
                        </Form.Group>
                        <Form.Group id="bio">
                            <Form.Label>Bio</Form.Label>
                            <Form.Control type="text" ref={bioRef} />
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
                            className="w-100 col  btn-light filter-btn"
                            type="submit"
                        >
                            Sign Up
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account?{" "}
                <Link to="/login" className="login">
                    Log In
                </Link>
            </div>
        </Container>
    );
}
