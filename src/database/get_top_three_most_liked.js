import { articlesRef } from "../database/collections";

export default async () => {
  let articles = [];

  try {
    await articlesRef
      .orderBy("likes", "desc")
      .limit(3)
      .get()
      .then((querySnapshot) => {
        //  articles = querySnapshot.map((a) => a.data());
        querySnapshot.forEach((doc) => {
          articles.push(doc);
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
        });
      });
  } catch (error) {}
  return articles;
};