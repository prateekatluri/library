import "./App.css";
import Filter from "./components/Filter";
import BookInfo from "./components/BookInfo";
import { useState } from "react";
function App() {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(10);
  const [author, setAuthor] = useState("rowling");
  const [topic, setTopic] = useState("");
  const [lang, setLang] = useState("en");
  return (
    <div className="bg-black w-full h-full">
      <h1 className="text-yellow-100 text-center font-extrabold text-4xl pt-2">
        LIBRARY
      </h1>
      <Filter
        books={books}
        setBooks={setBooks}
        page={page}
        setPage={setPage}
        author={author}
        setAuthor={setAuthor}
        topic={topic}
        setTopic={setTopic}
        lang={lang}
        setLang={setLang}
      />
      <BookInfo
        books={books}
        setBooks={setBooks}
        page={page}
        setPage={setPage}
        author={author}
        setAuthor={setAuthor}
        topic={topic}
        setTopic={setTopic}
        lang={lang}
        setLang={setLang}
      />
    </div>
  );
}

export default App;
