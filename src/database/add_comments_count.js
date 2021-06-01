import { reactionsCounterRef } from "../database/collections";

export default async function addCommentsCount(articleId) {
  const count = reactionsCounterRef.doc(articleId);
  count.get().then((doc) => {
    if (doc.exists) {
      count.update({ comments: doc.data().comments + 1 });
      return doc.data().comments;
    } else {
      console.log(articleId);
      count
        .set({ likes: 0, views: 0, comments: 0 })
        .then(() => {
          console.log("likes count updated");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });
}
