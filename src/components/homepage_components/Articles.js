import React, { useState, useEffect } from "react";
import "./Articles.css";
import ArticleBodySmall from "../article_components/Article_body_small";
// import FilterButtons from "../homepage_components/Filter_buttons";
import getArticles from "../../database/get_all_articles";
import getCurrentUserArticles from "../../database/get_current_user_articles";
import { useAuth } from "../../contexts/AuthContext";
// import { Button, Row } from "react-bootstrap";
// import getMostRecent from "../../database/get_most_recent_articles";
// import getMostLiked from "../../database/get_most_liked_articles";
// import getMostRead from "../../database/get_most_read_articles";

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

  // const buttons = ["Most recent", "Most read", "Most liked"];
  // const mostRecent = async () => setArticles(await getMostRecent());
  // const mostLiked = async () => setArticles(await getMostLiked());
  // const mostRead = async () => setArticles(await getMostRead());

  // const handleClick = [mostRecent(), mostLiked(), mostRead()];
  // const btnLength = [0, 1, 2];

  return (
    <>
      {/* <Row>
        <Button
          key={buttons[0]}
          onClick={mostRecent}
          className="col ml-3 mr-3 btn-light filter-btn"
        >
          {buttons[0]}
        </Button>
      </Row> */}
      <div>
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
