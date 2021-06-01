import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import Comment from "./Comment";
function Comments({ data }) {
  const { currentUser } = useAuth();
  useEffect(() => {}, []);
  let text =
    "The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md";

  let avatar =
    "https://image.freepik.com/free-vector/cute-shiba-inu-dog-astronaut-sitting-cartoon-icon-illustration_138676-2797.jpg";
  return (
    <div>
      <Comment text={text} />
      <Comment text={text} />
      <Comment text={text} />
      <Comment text={text} />
      <Comment text={text} />
    </div>
  );
}

export default Comments;
