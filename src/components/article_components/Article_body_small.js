import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import ArticleReadMoreBtn from "./Article_read_more_btn";
import getUserDetails from "../../database/get_user_details";
import ReactionsComponent from "../../components/article_components/Reactions_component";

function ArticleBodySmall({ id, data, title, description }) {
  const [author, setAuthor] = useState("");

  useEffect(() => {
    const getAuthor = async () => {
      const user = await getUserDetails(data.authorId);
      setAuthor(user);
    };
    getAuthor();
  }, [data.authorId]);

  return (
    <div key={id}>
      <Card className="mt-4">
        <Card.Body>
          <Card.Title>
            <h2>{title}</h2>
          </Card.Title>
          <Card.Text className="text-muted">by {author.username}</Card.Text>
          <Card.Subtitle className="text-muted mb-2 home">
            {new Date(data.createdAt.seconds * 1000).toLocaleString()}
          </Card.Subtitle>
          <Card.Text className="mt-4 card-text bold">{description}</Card.Text>
        </Card.Body>
        <div className="article-body-small-bottom">
          <ArticleReadMoreBtn id={id} />
          <ReactionsComponent></ReactionsComponent>
        </div>
      </Card>
    </div>
  );
}

export default ArticleBodySmall;
