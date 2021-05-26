import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import ArticleReadMoreBtn from "./Article_read_more_btn";
import getUserDetails from "../../database/get_user_details";

function ArticleBodySmall({ id, data, description }) {
  const [author, setAuthor] = useState("");
  useEffect(() => {
    const getAuthor = async () => {
      const user = await getUserDetails(data.authorId);
      setAuthor(user);
    };
    getAuthor();
  }, []);

  return (
    <div>
      <Card className="mt-4">
        <Card.Body>
          <Card.Title>
            <h2>{data.title}</h2>
          </Card.Title>{" "}
          <Card.Text className="text-muted">by {author.username}</Card.Text>
          <Card.Subtitle className="text-muted mb-2 home">
            {new Date(data.createdAt.seconds * 1000).toLocaleString()}
          </Card.Subtitle>
          <Card.Text className="mt-4 card-text bold">{description}</Card.Text>
        </Card.Body>
        <ArticleReadMoreBtn id={id} />
      </Card>
    </div>
  );
}

export default ArticleBodySmall;
