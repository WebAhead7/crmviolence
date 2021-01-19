import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import ImageInput from "../ImageInput";
import "./style.css";

const DevComponent = () => {
  const [url, setUrl] = React.useState("");

  return (
    <div>
      <h1> Test DevComponent</h1>
      <ImageInput
        height="200px"
        width="400px"
        onError={(err) => console.log(err)}
        onChange={(url) => setUrl(url)}
        value={url}
      />
    </div>
  );
};

export default DevComponent;
