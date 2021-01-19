import React, { useMemo } from "react";
import { useDropzone } from "react-dropzone";

const activeStyle = {
  borderColor: "yellow",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

export default function StyledDropzone({
  fileTypes,
  height,
  width,
  getSignedRequest,
  value,
  loading,
  error,
}) {
  const isMobile = window.innerWidth <= 760;

  const baseStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 5,
    borderColor: error ? "red" : "#d4d4d4",
    borderStyle: "dashed",
    cursor: "pointer",
    color: "#bdbdbd",
    height,
    outline: "none",
    transition: "border .24s ease-in-out",
    width,
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: "image/*",
    onDrop: (files) => {
      if (Array.isArray(files) && files.length) {
        getSignedRequest(files[0]);
      }
    },
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      borderColor: value && "lightgreen",
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragAccept, isDragActive, isDragReject, error]
  );

  return (
    <div
      className="dropzone-container"
      style={{ marginBottom: isMobile && "20px" }}
    >
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />

        {loading && (
          <span className="spinner" style={{ borderWidth: "0.7em" }} />
        )}

        {!value && !loading && (
          <img
            style={{ maxHeight: "50%" }}
            src="/assets/default-image.svg"
            alt=""
          />
        )}

        {value && !loading && (
          <img
            style={{ maxWidth: "40%", maxHeight: "40%", marginTop: "20px" }}
            src={value}
            alt=""
          />
        )}
      </div>
    </div>
  );
}
