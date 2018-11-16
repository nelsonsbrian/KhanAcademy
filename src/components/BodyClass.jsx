import React, { Component } from "react";
import PropTypes from "prop-types";

function BodyClass(props) {
  return (
    <div className="classPanel">
      <style jsx>{`
        .classrow {
            margin: 10px;
        }
      `}</style>
      <div className="row classrow">
        {props.items}

      </div>
    </div>
  );
}

BodyClass.PropTypes = {
    items: PropTypes.string.isRequired
};

export default BodyClass;
