import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import ArticleReadMoreBtn from "./Article_read_more_btn";
import getUserDetails from "../../database/get_user_details";
import ReactionsComponent from "../../components/article_components/Reactions_component";
function ArticleBodySmaller({ id, data, title }) {
  const [author, setAuthor] = useState("");
  const [reactions, setReactions] = useState({
    likes: 0,
    views: 0,
    comments: 0,
  });

  useEffect(() => {
    const getAuthor = async () => {
      const user = await getUserDetails(data.authorId);
      setAuthor(user);
    };
    setReactions({
      likes: data.likes,
      views: data.views,
      comments: data.comments,
    });
    getAuthor();
  }, [data]);

  return (
    <div className="article-body-smaller" key={id}>
      <Card className="mt-2">
        <Card.Body>
          <Card.Title>
            <h6>{title}</h6>
          </Card.Title>
          <Card.Text className="text-muted">by {author.username}</Card.Text>
          <Card.Subtitle className="text-muted home">
            {new Date(data.createdAt.seconds * 1000).toLocaleString()}
          </Card.Subtitle>
        </Card.Body>
        <div className="article-body-small-bottom">
          <ArticleReadMoreBtn id={id} />
          <ReactionsComponent reactionCounts={reactions}></ReactionsComponent>
        </div>
      </Card>
    </div>
  );
}

export default ArticleBodySmaller;
