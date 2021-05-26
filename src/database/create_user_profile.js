import { usersRef } from "./collections";

export default async (id, userData) => {
  console.log("////////////////////////////////");
  console.log(id);
  try {
    const newUser = await usersRef.doc(id).set({ ...userData });
    console.log("adding new user");
    return newUser;
  } catch (error) {
    console.log("failed to add user details");
  }
};
