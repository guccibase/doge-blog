import React from "react";
import { Link } from "react-router-dom";

function ArticleReadMoreBtn({ data }) {
  return (
    <div>
      <Link
        to={"/blog/" + "EoqRQijz9DA0l6kxCo1a"}
        className="btn read-more btn-lg"
      >
        Read more
      </Link>
    </div>
  );
}

export default ArticleReadMoreBtn;
