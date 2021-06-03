import React, { useState } from "react";
import NewArticleCancelBtn from "./New_article_cancel_btn";
import NewArticleDescription from "./New_article_description";
import NewArticleMarkdown from "./New_article_markdown";
import SubmitButton from "../common_components/Submit_button";
import NewArticleTitle from "./New_article_title";
import ValidateData from "../../helpers/validate_new_article";
import SubmitNewArticle from "../../helpers/submit_new_article";
import { useHistory } from "react-router-dom";
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
    navigate = await ValidateData(articleData);
    await SubmitNewArticle(navigate, articleData, history);
  };

  return (
    <div class="container">
      <h1 class="mb-4">New Article</h1>
      <Form onSubmit={handleSubmit}>
        <NewArticleTitle setArticleData={setArticleData} />
        <NewArticleDescription setArticleData={setArticleData} />
        <NewArticleMarkdown setArticleData={setArticleData} />
        <NewArticleCancelBtn />
        <SubmitButton />
      </Form>
    </div>
  );
}
