export default async function validateData(articleData) {
  console.log("validating");
  console.log(articleData.title);
  if (
    articleData.title.length > 5 &&
    articleData.description.length > 20 &&
    articleData.markdown.length > 50
  ) {
    console.log("articleData");
    return true;
  }

  return false;
}
