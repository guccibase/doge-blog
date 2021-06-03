import React, { useState, useEffect } from "react";
import NewArticleCancelBtn from "./New_article_cancel_btn";
import NewArticleDescription from "./New_article_description";
import NewArticleMarkdown from "./New_article_markdown";
import SubmitButton from "../common_components/Submit_button";
import NewArticleTitle from "./New_article_title";
import ValidateData from "../../helpers/validate_new_article";
import EditArticle from "../../database/edit_article";
import getArticle from "../../database/get_article";
import { useHistory, useParams } from "react-router-dom";
import { Form } from "react-bootstrap";
import "./New_article.css";

export default function EditArticleForm() {
  let { id } = useParams();
  let navigate = false;
  const history = useHistory();

  const [articleData, setArticleData] = useState({
    title: "",
    description: "",
    markdown: "",
    authorId: "",
    sanitizedHtml: "",
  });

  useEffect(() => {
    let isMounted = true;
    const fetchArticle = async () => {
      const article = await getArticle(id);
      setArticleData(article);
    };

    if (isMounted) fetchArticle();
    return () => {
      isMounted = false;
    };
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate = await ValidateData(articleData);
    if (navigate) {
      await EditArticle(articleData, id);
      history.push("/blog/" + id);
    }
  };

  return (
    <div class="container">
      <h1 class="mb-4">Edit Article</h1>
      <Form onSubmit={handleSubmit}>
        <NewArticleTitle
          setArticleData={setArticleData}
          formValue={articleData.title}
        />
        <NewArticleDescription
          setArticleData={setArticleData}
          formValue={articleData.description}
        />
        <NewArticleMarkdown
          setArticleData={setArticleData}
          formValue={articleData.markdown}
        />
        <NewArticleCancelBtn />
        <SubmitButton />
      </Form>
    </div>
  );
}
