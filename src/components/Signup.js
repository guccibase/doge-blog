import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import createUserProfile from "../database/create_user_profile";
import "../components/screens/sign-up.css";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const usernameRef = useRef();
  const bioRef = useRef();
  const avatarRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      const userId = await signup(
        emailRef.current.value,
        passwordRef.current.value
      );
      await createUserProfile(userId, {
        username: usernameRef.current.value,
        email: emailRef.current.value,
        bio: bioRef.current.value,
        avatar: avatarRef.current.value,
      });
      history.push("/");
    } catch {
      setError("Failed to create an account");
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
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Form.Group id="username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" ref={usernameRef} required />
            </Form.Group>
            <Form.Group id="bio">
              <Form.Label>Bio</Form.Label>
              <Form.Control type="text" ref={bioRef} />
            </Form.Group>
            <Form.Group id="avatar">
              <Form.Label>Avatar</Form.Label>
              <Form.Control type="text" ref={avatarRef} />
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
