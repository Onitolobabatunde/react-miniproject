import React from "react";
import ReactDom from "react-dom";

import "./styles.css";

import { books } from "./books";
import SpecificBook from "./book";
import { greeting } from "./testing/testing";

function BookList() {
  console.log(greeting);
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <SpecificBook key={book.id} {...book}></SpecificBook>;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
