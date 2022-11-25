import React from "react";
import "./SectionTitle.css";

const SectionTitle = ({ title }) => {
  return (
    <div className="py-10">
      <h1 className="section_title text-3xl font-bold">{title}</h1>
    </div>
  );
};

export default SectionTitle;
