import React from "react";
import { Card } from "react-bootstrap";
import ArticleReadMoreBtn from "./Article_read_more_btn";

function ArticleBodySmall({ id, data }) {
  return (
    <div>
      <Card className="mt-4">
        <Card.Body>
          <Card.Title>
            <h2>{data.title}</h2>
          </Card.Title>
          <Card.Subtitle className="text-muted mb-2 home">
            {new Date(data.createdAt.seconds * 1000).toLocaleString()}
          </Card.Subtitle>
          <Card.Text className="mt-4 card-text bold">
            {data.description.substring(0, 50) + "..."}
          </Card.Text>
        </Card.Body>
        <ArticleReadMoreBtn id={id} />
      </Card>
    </div>
  );
}

export default ArticleBodySmall;
