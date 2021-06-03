import React from "react";

export default function New_article_title({ setArticleData, formValue }) {
  return (
    <div className="form-group">
      <label for="title">Title</label>
      <input
        type="text"
        defaultValue={formValue && formValue}
        class="form-control"
        name="title"
        required
        id="title"
        onChange={(text) => {
          const title = text.target.value;

          setArticleData((prev) => {
            return {
              ...prev,
              title,
            };
          });
        }}
      />
    </div>
  );
}
