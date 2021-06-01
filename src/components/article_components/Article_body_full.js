import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import AppHeader from "../homepage_components/App_header";
import Tracker from "../homepage_components/Tracker";
import AddCommentComponent from "./Add_comment_component";
import "./Article_styles.css";
import ReactionsComponent from "./Reactions_component";
import { useAuth } from "../../contexts/AuthContext";
import Comments from "./Comments";
import SubmitLikes from "../../database/submit_like";
import AddLikesCount from "../../database/add_likes_count";

function ArticleBodyFull({ data, articleId }) {
  const { currentUser } = useAuth();
  useEffect(() => {
    document.querySelector(".article-body").innerHTML = data.sanitizedHtml;
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
            {currentUser && currentUser.uid === data.authorId ? (
              <span
                onClick={() => {
                  SubmitLikes(articleId, currentUser.uid);
                  AddLikesCount(articleId);
                }}
                className="btn btn-info"
              >
                Like article
              </span>
            ) : (
              <a href="/" className="btn btn-info">
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
          <ReactionsComponent id="" />
        </div>
      </Card>
      <AddCommentComponent
        articleId={articleId}
        currentUserId={currentUser.uid}
      />
      <Comments />
    </div>
  );
}

export default ArticleBodyFull;
