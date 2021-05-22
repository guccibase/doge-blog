import React, { useState, useEffect } from "react";
import NewArticleCancelBtn from "./New_article_cancel_btn";
import NewArticleDescription from "./New_article_description";
import NewArticleMarkdown from "./New_article_markdown";
import NewArticleSubmitBtn from "./New_article_submit_btn";
import NewArticleTitle from "./New_article_title";
import { useHistory } from "react-router-dom";
import createArticle from "../../database/create_new_article";
import { Form } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import "./New_article.css";

export default function NewArticleForm() {
  const { currentUser } = useAuth();

  const [articleData, setArticleData] = useState({
    title: "",
    description: "",
    markdown: "",
    authorId: currentUser.uid,
  });
  let navigate = false;
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await validateData();
    console.log("validated");
    if (navigate === true) {
      console.log("submiting");
      try {
        const slug = await createArticle(articleData);
        history.push("/blog/" + "test");
      } catch (error) {
        console.log(error);
      }
    }
  };

  async function validateData() {
    console.log("validating");
    console.log(articleData.title);
    if (
      articleData.title.length > 5 &&
      articleData.description.length > 20 &&
      articleData.markdown.length > 10
    ) {
      console.log("articleData");
      navigate = true;
    } else {
      navigate = false;
    }

    return navigate;
  }

  return (
    <div class="container">
      <h1 class="mb-4">New Article</h1>
      <Form onSubmit={handleSubmit}>
        <NewArticleTitle setArticleData={setArticleData} />
        <NewArticleDescription setArticleData={setArticleData} />
        <NewArticleMarkdown setArticleData={setArticleData} />
        <NewArticleCancelBtn />
        <NewArticleSubmitBtn />
      </Form>
    </div>
  );
}
