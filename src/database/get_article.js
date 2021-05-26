import { articlesRef } from "../database/collections";

export default async (id) => {
  const article = await articlesRef
    .doc(id)
    .get()
    .then((doc) => {
      console.log(doc);
      return doc.data();
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });

  return article;
};
