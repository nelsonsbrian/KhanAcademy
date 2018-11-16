import React, { Component } from "react";
import PropTypes from "prop-types";
import BodyClass from "./BodyClass";

function BodyCoursePanel(props) {
  return (
    <div className="coursePanel">
      <style jsx>{`
      .rowheight {
          height: 300px;
          border: black solid 1px;
      }
      `}</style>
      <div className="row rowheight">
      <h3>{props.subject}</h3>
        {props.class.map((element, index) => (
          <BodyClass items={element}
          key={index}
          />
        ))}
      </div>
    </div>
  );
}

BodyCoursePanel.PropTypes = {
  subject: PropTypes.string.isRequired,
  class: PropTypes.array.isRequired
};

export default BodyCoursePanel;
