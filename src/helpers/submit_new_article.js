import createArticle from "../database/create_new_article";

export default async (navigate, articleData, history) => {
  console.log("validated");
  if (navigate === true) {
    console.log("submiting");
    try {
      const id = await createArticle(articleData);
      console.log(id);
      history.push("/blog/" + id);
    } catch (error) {
      console.log(error);
    }
  }
};
