import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ArticleBodySmall from "../article_components/Article_body_small";
import getArticles from "../../database/get_most_liked_articles";

function MostLikedArticles() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    let fetchArticles = async () => {
      let articlesList = await getArticles();
      setArticles(articlesList);
    };
    fetchArticles();
  }, []);

  return (
    <div>
      <h4 className="mt-4">Most liked</h4>
      {articles.length > 0 && (
        <Row className="mb-4 justify-content-md-center">
          {articles.map((a, i) => (
            <Col key={a.id} className="article-small" sm="auto">
              <ArticleBodySmall
                id={a.id}
                data={a.data()}
                description={a.data().description.substring(0, 50) + "..."}
                title={a.data().title.substring(0, 20) + "..."}
              ></ArticleBodySmall>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}
export default MostLikedArticles;
