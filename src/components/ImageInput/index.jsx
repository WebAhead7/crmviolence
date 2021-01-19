import React, { useState } from "react";
import axios from "axios";
import Dropzone from "./Dropzone";

const ImageInput = ({ onError, onChange, height, width, value }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const uploadFile = (file, signedRequest, url) =>
    axios
      .put(signedRequest, file, {
        headers: {
          "Content-Type": file.type,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          onChange(url);
          setLoading(false);
        } else {
          onError("Could not upload file.");
          setLoading(false);
        }
      })
      .catch((error) => console.log(error));

  const getSignedRequest = (file) => {
    if (file.size > 5000000) {
      return setError("File should be below 5mb");
    }

    setLoading(true);

    return axios
      .get(
        `${process.env.REACT_APP_UPLOAD_SERVICE_URL}/upload/webahead?file-name=${file.name}&file-type=${file.type}`
      )
      .then((res) => {
        if (res.status === 200 && res.data.success) {
          uploadFile(file, res.data.signedRequest, res.data.url);
        } else {
          onError("Could not get signed URL.");
          setLoading(false);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Dropzone
        width={width}
        height={height}
        getSignedRequest={getSignedRequest}
        value={value}
        loading={loading}
        error={error}
      />
      <span style={{ color: "red" }}>{error}</span>
    </div>
  );
};

export default ImageInput;
