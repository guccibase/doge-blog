import articlesRef from "./collections";
import createSlug from "../helpers/create_slug";
import purifyHTML from "../helpers/purify_html";
export default async function createArticle(article) {
  const time = new Date();
  try {
    const slug = await createSlug(article.title, time);
    const sanitizedHtml = await purifyHTML(article.markdown);
    const articleId = await articlesRef
      .add({
        ...article,
        slug,
        sanitizedHtml,
        createdAt: time,
        read: 0,
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
