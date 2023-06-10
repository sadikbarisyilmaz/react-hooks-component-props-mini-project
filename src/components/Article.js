import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <span>
        {minutes < 5
          ? `☕️ ${minutes} min read`
          : minutes < 10
          ? `☕️☕️ ${minutes} min read`
          : minutes < 20
          ? `☕️☕️☕️ ${minutes} min read`
          : minutes < 30
          ? `☕️☕️☕️☕️ ${minutes} min read`
          : ""}
      </span>
    </article>
  );
}
export default Article;
