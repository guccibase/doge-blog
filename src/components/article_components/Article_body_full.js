import React from "react";
import { Card, Container } from "react-bootstrap";
import AppHeader from "../homepage_components/App_header";
import AppTitle from "../homepage_components/App_title";
import "./Article_styles.css";

function ArticleBodyFull({ data }) {
  return (
    <Container>
      <AppHeader />
      <Card className="mt-4">
        <Card.Body>
          <Card.Title>
            <h2>{data.title}</h2>
          </Card.Title>
          <Card.Subtitle className="text-muted mb-2 home">
            {new Date(data.createdAt.seconds * 1000).toLocaleString()}
          </Card.Subtitle>
          <a href="/" class="btn btn-secondary ml-2 mr-2">
            All articles
          </a>
          <a href="/" class="btn btn-info">
            Edit
          </a>
          <Card.Text className="mt-4 card-text bold">
            {data.description}
          </Card.Text>
          <div className="markdown">{data.markdown}</div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ArticleBodyFull;
