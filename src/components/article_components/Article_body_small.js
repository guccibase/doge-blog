import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import ArticleReadMoreBtn from "./Article_read_more_btn";
import getUserDetails from "../../database/get_user_details";
import ReactionsComponent from "../../components/article_components/Reactions_component";
import getReactionCounts from "../../database/get_reaction_counts";
function ArticleBodySmall({ id, data, title, description, userProfile }) {
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
    <div key={id}>
      <Card className="mt-4">
        <Card.Body>
          {userProfile && data.status === "pending" && (
            <Card.Text>{data.status}</Card.Text>
          )}
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
          <ReactionsComponent reactionCounts={reactions}></ReactionsComponent>
        </div>
      </Card>
    </div>
  );
}

export default ArticleBodySmall;
