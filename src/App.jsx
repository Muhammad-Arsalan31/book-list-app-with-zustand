import { useState } from "react";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <AddBook />
      <BookList />
    </div>
  );
}

export default App;
