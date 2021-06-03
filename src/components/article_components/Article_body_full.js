import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import AppHeader from "../homepage_components/App_header";
import Tracker from "../homepage_components/Tracker";
import AddCommentComponent from "./Add_comment_component";
import "./Article_styles.css";
import ReactionsComponent from "./Reactions_component";
import { useAuth } from "../../contexts/AuthContext";
import Comments from "./Comments";
import Like_button from "./Like_button";
import getReactionCounts from "../../database/get_reaction_counts";

function ArticleBodyFull({ data, articleId }) {
  const { currentUser } = useAuth();
  const [isAuthor, setIsAuthor] = useState(false);
  const [currentUserId, setCurrentUserId] = useState("noid");
  const [reactions, setReactions] = useState({
    likes: 0,
    views: 0,
    comments: 0,
  });

  const getReactionCount = async () => {
    const reactionCounts = await getReactionCounts(articleId);

    if (reactionCounts) setReactions(reactionCounts);
  };

  const author = async () => {
    if (currentUser) setCurrentUserId(currentUser.uid);
    if (currentUser && currentUser.uid === data.authorId) {
      setIsAuthor(true);
    }
  };

  useEffect(() => {
    document.querySelector(".article-body").innerHTML = data.sanitizedHtml;
    author();
    setReactions({
      likes: data.likes,
      views: data.views,
      comments: data.comments,
    });
  }, [data.sanitizedHtml]);

  return (
    <div>
      <AppHeader />
      <Tracker></Tracker>
      <Card className="mt-4">
        <Card.Body>
          <Card.Title>
            <h2>{data.description}</h2>
          </Card.Title>
          <Card.Subtitle className="text-muted mb-2 home">
            {new Date(data.createdAt.seconds * 1000).toLocaleString()}
          </Card.Subtitle>
          <div>
            <a href="/" className="btn btn-secondary ml-2 mr-2">
              All articles
            </a>
            <Like_button
              updateLikeCount={setReactions}
              articleId={articleId}
              currentUserId={currentUserId}
            />
            {isAuthor && (
              <a href={"/edit/" + articleId} className="btn btn-info">
                Edit
              </a>
            )}
          </div>
          <Card.Text className="mt-4 card-text bold">
            {data.description}
          </Card.Text>
          <div className="article-body"></div>
        </Card.Body>
        <div className="m-2 ml-4 article-body-full-bottom">
          <ReactionsComponent id="" reactionCounts={reactions} />
        </div>
      </Card>
      <AddCommentComponent
        updateCommentsCount={setReactions}
        articleId={articleId}
        currentUserId={currentUserId}
      />
      <Comments reactions={reactions} articleId={articleId} />
    </div>
  );
}

export default ArticleBodyFull;
