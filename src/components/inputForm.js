import React, { useEffect, useState } from "react";

const InputForm = (props) => {
  const [title, setTitle] = useState("");
  const [url, setURL] = useState("");

  useEffect(() => {
    setTitle(props.title);
    setURL(props.URL);
  }, [props.title, props.URL]);

  function titleChangeHandler(e) {
    setTitle(e.target.value);
  }
  function urlChangeHandler(e) {
    setURL(e.target.value);
  }
  function submitHandler(e) {
    e.preventDefault();
    if (title.length > 1 && url.length > 1) {
      props.onSubmit({
        id: Math.random(),
        title: title,
        URL: url,
      });
      setTitle("");
      setURL("");
      return;
    }
    window.alert("Form Invalid");
  }

  return (
    <form
      style={{ display: "flex", flexDirection: "column", alignItems: "start" }}
      onSubmit={submitHandler}
    >
      <label>
        Website Title :
        <input
          type="text"
          name="title"
          id="title"
          onChange={titleChangeHandler}
          value={title}
        ></input>
      </label>
      <label>
        Website URL :
        <input
          type="url"
          name="url"
          id="url"
          onChange={urlChangeHandler}
          value={url}
        ></input>
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

export default InputForm;
