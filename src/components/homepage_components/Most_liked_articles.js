import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
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
      <h1></h1>
      {articles.length > 2 && (
        <>
          <h4 className="mt-4">Most liked</h4>

          <Row className="mb-4">
            {articles.map((a) => (
              <div className="col">
                <ArticleBodySmall
                  key={a.id}
                  id={a.id}
                  data={a.data()}
                  description={a.data().description.substring(0, 50) + "..."}
                ></ArticleBodySmall>
              </div>
            ))}
          </Row>
        </>
      )}
    </div>
  );
}
export default MostLikedArticles;
