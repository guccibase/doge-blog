import React from "react";

export default function New_article_markdown({ setArticleData, formValue }) {
  return (
    <div class="form-group">
      <label for="markdown">Markdown</label>
      <textarea
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
      ></textarea>
    </div>
  );
}
