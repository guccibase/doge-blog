import { articlesRef } from "../database/collections";

export default async () => {
  let articles = [];
  try {
    articles = await articlesRef.orderBy("timestamp", "asc").get();
  } catch (error) {}

  return articles;
};
