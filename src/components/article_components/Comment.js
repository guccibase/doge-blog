import React from "react";
import { Card, CardImg } from "react-bootstrap";
import "./Article_styles.css";

export default function Comment({ text, authorId }) {
  return (
    <Card className="mt-4">
      <Card.Body>
        <Card.Title>guccibase</Card.Title>
        <Card.Subtitle className="text-muted mb-2 home">
          {Date.now().toLocaleString()}
        </Card.Subtitle>
        <Card.Text className="mt-4 card-text bold">{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}
