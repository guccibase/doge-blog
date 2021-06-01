import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import SubmitButton from "../common_components/Submit_button";
import submitComment from "../../database/submit_comment";

export default function AddCommentComponent({ articleId, currentUserId }) {
  const commentRef = useRef();
  async function onSubmit(e) {
    e.preventDefault();
    const comment = commentRef.current.value;
    await submitComment(articleId, currentUserId, comment);
  }
  return (
    <Form onSubmit={onSubmit} className="mt-4">
      <label for="description">Add a comment</label>
      <textarea
        required
        name="comment"
        id="comment"
        cols="30"
        rows="2"
        class="form-control mb-2"
        ref={commentRef}
      ></textarea>
      <SubmitButton />
    </Form>
  );
}
