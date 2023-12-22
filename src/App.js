import React from "react";
import "./styles.css";

function NewArticle() {
  return (
    <article className="article">
      <h2 className="article__title">Snakes</h2>
      <label htmlFor="snake-input">
        guckste ma welche schlange dich interessiert
      </label>
      <input id="snake-input"></input>
      <a
        className="article__link"
        href="https://de.wikipedia.org/wiki/Schlangen"
      >
        Visit the wikipedia website for snakes
      </a>
    </article>
  );
}

export default function App() {
  return <NewArticle />;
}
