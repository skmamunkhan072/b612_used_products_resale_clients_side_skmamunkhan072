import React from "react";

const ErrorPage = ({ error }) => {
  return (
    <div>
      <h1>This is ErrorPage {error ? error : "not found"}</h1>
    </div>
  );
};

export default ErrorPage;
