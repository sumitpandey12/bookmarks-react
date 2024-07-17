import React from "react";

const BookmarkList = (props) => {
  return (
    <>
      <h4 style={{ display: "flex", alignItems: "start" }}>All Bookmarks</h4>
      {props.bookmarks.map((bookmark) => (
        <div key={bookmark.id} style={{ display: "flex", gap: "10px" }}>
          <div>
            {bookmark.title}
            {"    >    "}
          </div>
          <a href={bookmark.URL} target="_blank">
            {bookmark.URL}
          </a>
          <button onClick={() => props.onDelete(bookmark.id)}>Delete</button>
          <button onClick={() => props.onEdit(bookmark.id)}>Edit</button>
        </div>
      ))}
    </>
  );
};

export default BookmarkList;
