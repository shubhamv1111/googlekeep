/** @format */

import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const App = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((prevData) => {
      localStorage.setItem("note", JSON.stringify([...prevData, note]));
      return [...prevData, note];
    });
  };

  const onDelete = (id) => {
    setAddItem((oldData) => {
      const resArr = oldData.filter((currdata, indx) => {
        return indx !== id;
      });
      localStorage.setItem("note", JSON.stringify(resArr));
      return resArr;
    });
  };

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("note"));
    if (data === null) {
      return setAddItem([]);
    }
    setAddItem(data);
  }, []);

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}
      <Footer />
    </>
  );
};

export default App;
