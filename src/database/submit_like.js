import { likesRef } from "../database/collections";

export default async function submitLike(articleId, likerId) {
  const like = await likesRef
    .doc(articleId)
    .collection("likers")
    .doc(likerId)
    .set({})
    .then((doc) => {
      console.log("liked article");
    })
    .catch((error) => {
      console.log("failed to add like");
    });

  return like;
}
