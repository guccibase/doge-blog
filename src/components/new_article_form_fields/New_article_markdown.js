import React from "react";
import MDEditor from "@uiw/react-md-editor";

export default function New_article_markdown({ setArticleData, formValue }) {
  return (
    <div class="form-group">
      <label for="markdown">
        <span>
          <h4>Markdown</h4>
        </span>{" "}
        (must be 50-10,000 characters long)
      </label>
      <MDEditor
        value={formValue}
        onChange={(v) => {
          setArticleData((prev) => {
            return { ...prev, ["markdown"]: v };
          });
        }}
      />
      {/* <textarea
        required
        name="markdown"
        id="markdown"
        defaultValue={formValue && formValue}
        cols="30"
        rows="10"
        class="form-control"
        onChange={(text) => {
          const markdown = text.target.value;
          setArticleData((prev) => {
            return {
              ...prev,
              markdown,
            };
          });
        }}
      ></textarea> */}
    </div>
  );
}
