import React from "react";

import "../styles/Skill.scss";

const Skill = (props) => {
  return (
    <div className="skill" key={props.key}>
      <div className="content">{props.content}</div>
    </div>
  );
};

export default Skill;
