import { db } from "../firebase";
export const articlesRef = db.collection("articles");
export const usersRef = db.collection("users");
export const likesRef = db.collection("likes");
export const viewsRef = db.collection("views");
export const commentsRef = db.collection("comments");
export const reactionsCounterRef = db.collection("reactions counter");
export default articlesRef;
