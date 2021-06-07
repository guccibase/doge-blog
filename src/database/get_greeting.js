import { greentingRef } from "./collections";

export default async () => {
  let greeting = "";
  await greentingRef.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      greeting = doc.data().greeting;
    });
  });
  console.log(greeting);
  return greeting;
};
