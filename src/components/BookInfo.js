import axios from "axios";
import React, { useEffect, useState } from "react";
import image from "../png/page-icon.png";
import notFound from "../png/notFound.png";
function BookInfo({
  books,
  setBooks,
  page,
  setPage,
  author,
  setAuthor,
  topic,
  setTopic,
  lang,
  setLang,
}) {
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}&startIndex=${page}&maxResults=10`
      );
      setBooks(data.data.items);
    }
    fetchData();
  }, [author, lang, page]);
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=subject:${topic}&langRestrict=${lang}&maxResults=10`
      );
      if (topic != null) setBooks(data.data.items);
    }
    fetchData();
  }, [topic, lang]);
  return (
    <content>
      {books &&
        books.slice(0, 10).map((book) => {
          return (
            <div className="w-[900px] rounded-lg bg-yellow-100 h-[150px] mt-4  m-auto">
              {/* Image */}
              <ul className="flex ml-2 justify-between">
                <li>
                  {book.volumeInfo.imageLinks && (
                    <img
                      src={book.volumeInfo.imageLinks.thumbnail}
                      alt="book_image"
                      className="w-[75px] h-30 mt-5 ml-5"
                    />
                  )}
                  {book.volumeInfo.imageLinks == null && (
                    <img
                      src={notFound}
                      alt="notfound"
                      className="w-[75px] h-[115px] mt-5 ml-5"
                    />
                  )}
                </li>
                {/* title */}
                <li className="flex items-center ml-5">
                  <ul>
                    <li>
                      <h1 className="text-center font-extrabold">TITLE</h1>
                    </li>
                    <li className="text-center">
                      {book.volumeInfo.title.substring(0, 20)}
                    </li>
                  </ul>
                </li>
                {/* Author */}
                <li className="flex items-center ml-5">
                  <ul>
                    <li>
                      <h1 className="text-center font-extrabold">AUTHOR</h1>
                    </li>
                    <li className="text-center">
                      {book.volumeInfo.authors
                        ? book.volumeInfo.authors
                        : "Not Found"}
                    </li>
                  </ul>
                </li>
                {/* Topic */}
                <li className="flex items-center ml-5">
                  <ul>
                    <li>
                      <h1 className="text-center font-extrabold">TOPIC</h1>
                    </li>
                    <li className="w-[100px] text-center">
                      {book.volumeInfo.categories == null
                        ? "null"
                        : book.volumeInfo.categories}
                    </li>
                  </ul>
                </li>
                {/* Language */}
                <li className="flex items-center ml-5 mr-6">
                  <ul>
                    <li>
                      <h1 className="text-center font-extrabold">LANGUAGE</h1>
                    </li>
                    <li className="text-center">{book.volumeInfo.language}</li>
                  </ul>
                </li>
              </ul>
            </div>
          );
        })}
      <div className="flex justify-center mt-3">
        <img
          src={image}
          alt="prev-page"
          className="w-10 rotate-180 "
          onClick={() => {
            if (page > 10) setPage(page - 10);
          }}
        />
        <img
          src={image}
          alt="prev-page"
          className="w-10 ml-[25px]"
          onClick={() => {
            setPage(page + 10);
            console.log(page);
          }}
        />
      </div>
    </content>
  );
}

export default BookInfo;
