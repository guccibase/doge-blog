import articlesRef from "./collections";
import createSlug from "../helpers/create_slug";
import purifyHTML from "../helpers/purify_html";
export default async function createArticle(article) {
  const time = new Date();
  try {
    console.log("creating article");
    const slug = await createSlug(article.title, time);
    console.log("slug");
    const sanitizedHtml = await purifyHTML(article.markdown);
    console.log("sani");
    const articleId = await articlesRef
      .add({
        ...article,
        slug,
        sanitizedHtml,
        createdAt: time,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        return docRef.id;
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });

    return articleId;
  } catch (error) {
    console.log(error);
  }
}
