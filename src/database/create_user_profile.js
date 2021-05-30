import { usersRef } from "./collections";

export default async (id, userData) => {
  try {
    const newUser = await usersRef.doc(id).set({ ...userData });
    console.log("adding new user");
    return newUser;
  } catch (error) {
    console.log("failed to add user details");
  }
};
