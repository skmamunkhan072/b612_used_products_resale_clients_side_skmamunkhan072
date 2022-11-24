import React from "react";
import { Link } from "react-router-dom";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading_wraper">
      <div className="loading">
        <div className="circle cyan"></div>
        <div className="circle magenta"></div>
        <div className="circle yellow"></div>
        <p>Loading...</p>
        <p className="mt-20">
          <Link to="/" className="btn btn-sm">
            Go BAck
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Loading;
