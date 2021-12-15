import { useRef, useState } from "react";
import { useStore } from "../store";
import Book from "./Book";

export default function BookList() {
  const { books } = useStore((state) => state);

  return (
    <div className="mt-5">
      <h1>Book List</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Author</th>
            <th scope="col">Genre</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
