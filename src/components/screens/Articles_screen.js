import React from "react";
import "./Articles_screen.css";
import NewArticleBtn from "../homepage_components/New_article_btn";
import Articles from "../homepage_components/Articles";
import MostLikedArticles from "../homepage_components/Most_liked_articles";
import Tracker from "../homepage_components/Tracker";
import AppHeader from "../homepage_components/App_header";

function ArticlesScreen() {
  return (
    <div>
      <AppHeader />
      <div>
        <Tracker />
      </div>
      <div>
        <NewArticleBtn />
      </div>
      <div>
        <MostLikedArticles />
      </div>
      <div>
        <Articles />
      </div>
    </div>
  );
}

export default ArticlesScreen;
