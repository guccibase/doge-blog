import { reactionsCounterRef } from "../database/collections";

export default async function minusLikesCount(articleId) {
  const count = reactionsCounterRef.doc(articleId);
  count.get().then((doc) => {
    if (doc.exists && doc.data().likes) {
      count.update({ likes: doc.data().likes - 1 });
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
