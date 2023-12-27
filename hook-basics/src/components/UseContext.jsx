import React, { useContext, useEffect, useState } from "react";
import { ToggleTheme } from "../App";

function UseContext() {
  const theme = useContext(ToggleTheme);
  const [likeCount, setLikeCount] = useState(0);
  const [displaytext, setDisp] = useState(false);

  const themeStyle = {
    backgroundColor: theme ? "black" : "grey",
    color: theme ? "grey" : "black",
    padding: "2rem",
    margin: "2rem",
  };

  const increment = () => {
    setLikeCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    if (displaytext) {
      alert('change');
    }
  }, [displaytext]);

  const handleContentClick = () => {
    setDisp(!displaytext);
  };

  return (
    <div style={themeStyle}>
      This is made by Kalviumyyyy
      <br />
      {displaytext && <p>This is a hidden text</p>}
      <button className="content" onClick={handleContentClick}>
        Content
      </button>

      <h2 className="like-count">{likeCount}</h2>
      <button className="like" onClick={increment}>
        Like
      </button>
    </div>
  );
}

export default UseContext;
