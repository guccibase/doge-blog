import articlesRef from "./collections";
import createSlug from "../helpers/create_slug";
import purifyHTML from "../helpers/purify_html";

export default async function createArticle(article) {
  try {
    console.log("creating article");
    const slug = await createSlug(article.title);
    console.log("slug");
    const sanitizedHtml = await purifyHTML(article.markdown);
    console.log("sani");
    const articleCreated = await articlesRef
      .doc()
      .set({ ...article, slug, sanitizedHtml });

    return slug;
  } catch (error) {
    console.log(error);
  }
}
