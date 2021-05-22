import slugify from "slugify";

export default async function createSlug(title) {
  console.log("creating slug");
  let slug = "";
  const time = new Date();
  if (title) {
    slug = slugify(title + "-created-" + time, { lower: true, strict: true });
  }

  return slug;
}
