import "./App.css";
import BookmarkList from "./components/bookmarkList";
import InputForm from "./components/inputForm";
import React, { useState } from "react";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [editTitle, setEditTitle] = useState("");
  const [editURL, setEditURL] = useState("");

  function submitHandler(e) {
    setBookmarks((pre) => {
      return [...pre, e];
    });
  }

  function onEditHandler(e) {
    const filtered = bookmarks.filter((bookmark) => bookmark.id == e);
    setEditTitle(filtered[0].title);
    setEditURL(filtered[0].URL);
    onDeleteHandler(e);
  }

  function onDeleteHandler(e) {
    const filtered = bookmarks.filter((bookmark) => bookmark.id !== e);
    console.log(filtered);
    setBookmarks(filtered);
  }

  return (
    <div className="App">
      <h1>Bookmark Website</h1>
      <InputForm onSubmit={submitHandler} title={editTitle} URL={editURL} />
      <BookmarkList
        bookmarks={bookmarks}
        onDelete={onDeleteHandler}
        onEdit={onEditHandler}
      />
    </div>
  );
}

export default App;
