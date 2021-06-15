import React, { useEffect, useState } from "react";
import ArticleBodySmall from "../article_components/Article_body_small";
import getArticle from "../../database/get_latest_article";

function LatestArticle() {
  const [a, setArticle] = useState({});
  useEffect(() => {
    let fetchArticle = async () => {
      let article = await getArticle();
      setArticle(article);
    };
    fetchArticle();
  }, []);

  return (
    <div className="latest-article">
      <h8>LATEST ARTICLE</h8>
      {a.id && (
        <ArticleBodySmall
          id={a.id}
          data={a.data}
          description={a.data.description.substring(0, 120) + "..."}
          title={a.data.title.substring(0, 60) + "..."}
        ></ArticleBodySmall>
      )}
    </div>
  );
}
export default LatestArticle;
