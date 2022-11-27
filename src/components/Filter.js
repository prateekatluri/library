import React from "react";

function Filter({
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
  //to create year range
  const range = (from, to, step) =>
    [...Array(Math.floor((to - from) / step) + 1)].map(
      (_, i) => from + i * step
    );
  const year_list = range(1800, 2010, 1);

  const getAuthor = (e) => {
    if (e.target.value.length > 4) setAuthor(e.target.value);
    else setAuthor("rowling");
  };
  const getTopic = (e) => {
    if (e.target.value.length >= 3) setTopic(e.target.value);
    else setTopic("");
  };
  const getLang = (e) => {
    if (e.target.value.length >= 1) setLang(e.target.value);
    else setLang("en");
  };
  return (
    <div className="border-white border w-[900px] m-auto h-10 mt-2 rounded-md text-white flex justify-between items-center">
      <div>
        <label className="ml-1">
          search-topic
          <input
            type="text"
            placeholder="Type"
            className="bg-gray-500 border-white rounded-sm ml-2 w-[40%]"
            onChange={(e) => getTopic(e)}
          ></input>
        </label>
      </div>
      <div>
        <label className="ml-1">
          author
          <input
            type="text"
            placeholder="Type"
            className="bg-gray-500 border-white rounded-sm ml-2 w-[40%]"
            onChange={(e) => getAuthor(e)}
          ></input>
        </label>
      </div>
      <div className="flex">
        <select className="w-20 bg-gray-500 mr-1">
          <option value="" disabled selected>
            Start year
          </option>
          {year_list.map((year) => {
            return (
              <option value={year} key={year}>
                {year}
              </option>
            );
          })}
        </select>
        <select className="w-20 bg-gray-500">
          <option value="" disabled selected>
            End year
          </option>
          {year_list.map((year) => {
            return (
              <option value={year} key={year}>
                {year}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default Filter;
