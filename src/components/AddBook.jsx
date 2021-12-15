import { useState } from "react";
import { useStore } from "../store";

export default function AddBook() {
  const { addBook } = useStore((state) => state);

  const [bookName, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  function handleSubmit(e) {
    e.preventDefault();

    const book = {
      id: Math.random() * 5,
      name: bookName,
      author: author,
      genre: genre,
    };
    addBook(book);
    setBookName("");
    setAuthor("");
    setGenre("");
  }
  return (
    <div className="mt-2">
      <h1>Create Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-3 my-1 ">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Book Name"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
            />
          </div>
          <div className="col-md-3 my-1">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Author Name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="col-md-3 my-1">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Genre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            />
          </div>
          <div className=" col-md-3 my-1">
            <button className="btn btn-primary col-12 col-md-6 ">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}
