import React, { useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import AppHeader from "../homepage_components/App_header";
import "./Article_styles.css";

function ArticleBodyFull({ data }) {
  useEffect(() => {
    document.querySelector(".article-body").innerHTML = data.sanitizedHtml;
  }, [data.sanitizedHtml]);
  return (
    <Container>
      <AppHeader />
      <Card className="mt-4">
        <Card.Body>
          <Card.Title>
            <h2>{data.description}</h2>
          </Card.Title>
          <Card.Subtitle className="text-muted mb-2 home">
            {new Date(data.createdAt.seconds * 1000).toLocaleString()}
          </Card.Subtitle>
          <a href="/" className="btn btn-secondary ml-2 mr-2">
            All articles
          </a>
          <a href="/" className="btn btn-info">
            Edit
          </a>
          <Card.Text className="mt-4 card-text bold">
            {data.description}
          </Card.Text>
          <div className="article-body"></div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ArticleBodyFull;
