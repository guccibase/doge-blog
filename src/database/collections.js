import { db } from "../firebase";
export const articlesRef = db.collection("articles");
export const usersRef = db.collection("users");
export default articlesRef;
