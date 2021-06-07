export default async function validateData(articleData) {
  console.log("validating");
  console.log(articleData.title);
  if (
    articleData.title.length > 3 &&
    articleData.title.length < 121 &&
    articleData.description.length > 19 &&
    articleData.description.length < 301 &&
    articleData.markdown.length > 49 &&
    articleData.markdown.length < 10001
  ) {
    console.log("articleData");
    return true;
  }

  return false;
}
