import React, { useState, useEffect } from "react";
import "./Articles.css";
import ArticleBodySmall from "../article_components/Article_body_small";
// import FilterButtons from "../homepage_components/Filter_buttons";
import getArticles from "../../database/get_all_articles";
import getCurrentUserArticles from "../../database/get_current_user_articles";
import { useAuth } from "../../contexts/AuthContext";
import { Col, Row, Button } from "react-bootstrap";
import getMostRecent from "../../database/get_most_recent_articles";
import getMostLiked from "../../database/get_most_liked_articles";
import getMostViewed from "../../database/get_most_viewed_articles";

function Articles({ allArticles }) {
  const [articles, setArticles] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    let isMounted = true;
    let fetchArticles = async () => {
      let articlesList = allArticles
        ? await getArticles()
        : await getCurrentUserArticles(currentUser && currentUser.uid);
      setArticles(articlesList);
    };
    if (isMounted) fetchArticles();
    return () => {
      return (isMounted = false);
    };
  }, [allArticles]);

  const buttons = ["Most recent", "Most viewed", "Most liked"];
  const handleFilterClick = async (filter, getArticlesFromFilter) => {
    let articlesList = await getArticlesFromFilter();
    setArticles(articlesList);
  };

  return (
    <>
      <div>
        {allArticles && (
          <Row className="justify-content-md-center">
            <Col className="m-1" sm="auto">
              <Button
                onClick={() => handleFilterClick(buttons[0], getMostRecent)}
                className="btn-light filter-btn"
                id={buttons[0]}
              >
                {buttons[0]}
              </Button>
            </Col>
            <Col className="m-1" sm="auto">
              <Button
                onClick={() => handleFilterClick(buttons[1], getMostViewed)}
                className="btn-light filter-btn"
                id={buttons[1]}
              >
                {buttons[1]}
              </Button>
            </Col>
            <Col className="m-1" sm="auto">
              <Button
                onClick={() => handleFilterClick(buttons[2], getMostLiked)}
                className="btn-light filter-btn"
                id={buttons[2]}
              >
                {buttons[2]}
              </Button>
            </Col>
          </Row>
        )}
        {articles.map((a) => (
          <ArticleBodySmall
            key={a.id}
            id={a.id}
            data={a.data()}
            description={a.data().description}
            title={a.data().title}
          ></ArticleBodySmall>
        ))}
      </div>
    </>
  );
}

export default Articles;
