import articlesRef from "../database/collections";

export default async () => {
  let articles = [];
  try {
    articles = await articlesRef.orderBy("read", "asc").get();
  } catch (error) {}
  return articles;
};
