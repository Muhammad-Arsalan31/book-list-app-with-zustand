import { useRef } from "react";
import { useStore } from "../store";

export default function Book({ book }) {
  const { deleteBook, updateBook } = useStore((state) => state);

  const nameRef = useRef("");
  const authorRef = useRef("");
  const genreRef = useRef("");

  function handleUpdate(id) {
    const book = {
      id: id,
      name: nameRef.current.value,
      author: authorRef.current.value,
      genre: genreRef.current.value,
    };
    // console.log(nameRef.current.value);
    updateBook(book);
  }
  return (
    <tr>
      <th scope="row">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Book Name"
          defaultValue={book.name}
          ref={nameRef}
        />
      </th>
      <td>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Author Name"
          defaultValue={book.author}
          ref={authorRef}
        />
      </td>
      <td>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Genre"
          defaultValue={book.genre}
          ref={genreRef}
        />
      </td>
      <td className="d-flex justify-content-around">
        <button
          className="btn btn-default"
          onClick={() => handleUpdate(book.id)}
        >
          <i className="fas fa-save"></i>
        </button>
        <button className="btn btn-default" onClick={() => deleteBook(book.id)}>
          <i className="fas fa-trash"></i>
        </button>
      </td>
    </tr>
  );
}
