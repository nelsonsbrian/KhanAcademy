import React, { Component } from "react";

class HeaderStart extends Component {
  state = {};
  render() {
    return (
      <div className="startdiv">
        <style jsx>{`
          .btn {
            height: 45px;
            width: 320px;
            border: 1px black solid;
            margin-bottom: 5px; 
            font-weight: bold;
          }
          .startdiv {
            padding-top: 100px;
            text-align: center;
          }

          h3 {
            font-weight: bold;
          }
          h4 {
            padding-bottom: 30px;
          }
          .startText {
            color: white;
          }
          #topBtn {
              background-color: darkblue;
              color: white;
              font-weight: bold;

          }
          .otherBtn {
              color: darkblue;
          }


        `}</style>
        <div className="startText">
          <h3>You can learn anything.</h3>
          <h4>For free. For everyone. Forever.</h4>
        <div />
          <button id="topBtn" className="btn">Learners, start here</button>
          <br />
          <button className="btn otherBtn">Teachers, start here</button>
          <br />
          <button className="btn otherBtn">Parents, start here</button>
        </div>
      </div>
    );
  }
}

export default HeaderStart;
