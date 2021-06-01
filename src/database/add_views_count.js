import { reactionsCounterRef } from "../database/collections";

export default async function addViewsCount(articleId) {
  const count = reactionsCounterRef.doc(articleId);
  count.get().then((doc) => {
    if (doc.exists) {
      count.update({ views: doc.data().views + 1 });
    } else {
      console.log(articleId);
      count
        .set({ likes: 0, views: 1, comments: 0 })
        .then(() => {
          console.log("views count updated");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });
}
