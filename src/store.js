import create from "zustand";
import { devtools, persist } from "zustand/middleware";

export const useStore = create(
  devtools(
    persist(
      (set, get) => ({
        books: [],
        addBook: (book) => set((state) => ({ books: [...state.books, book] })),
        deleteBook: (id) =>
          set({
            books: get().books.filter((book) => book.id !== id),
          }),
        updateBook: (book) =>
          set({
            books: get().books.map((stateBook) => {
              if (stateBook.id === book.id) {
                return {
                  ...stateBook,
                  name: book.name,
                  author: book.author,
                  genre: book.genre,
                };
              }
              return stateBook;
            }),
          }),
      }),
      {
        name: "books", // unique name
      }
    )
  )
);
