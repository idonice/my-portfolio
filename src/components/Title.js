import React from "react";
import "../styles/Title.scss";
import avatar from "../styles/avatar.JPG";
const Title = () => {
  return (
    <div className="title">
      <h1>Hello, I'm Ido Nice</h1>
      <p>A Full Stack Engineer</p>
      <img src={avatar} alt="profile-img" />
    </div>
  );
};

export default Title;
