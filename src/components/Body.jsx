import React, { Component } from "react";
import BodySubjects from "./BodySubjects";
import BodyCoursePanel from "./BodyCoursePanel";

class Body extends Component {
  state = {};
  render() {
    return (
      <div className="bodyDiv">
        <style jsx>{``}</style>
        <BodySubjects />
        {masterClasses.map((element, index) => (
          <BodyCoursePanel
            subject={element.subject}
            class={element.classes}
            key={index}
          />
        ))}
      </div>
    );
  }
}

export default Body;

const masterClasses = [
  {
    subject: "Math",
    classes: [
      "Early math",
      "Alegbra 1",
      "Trigonometry",
      "AP Claculus AB",
      "Multivariable calculus",
      "Arthimetic",
      "Geometry",
      "Precalculus",
      "AP Calculus BC",
      "Differential Equations",
      "Pre-Algebra",
      "Algebra 2",
      "Statistics & probability",
      "AP Statistics",
      "Linear Algebra"
    ]
  },
  {
    subject: "Science",
    classes: [
      "Early math",
      "Alegbra 1",
      "Trigonometry",
      "AP Claculus AB",
      "Multivariable calculus",
      "Arthimetic",
      "Geometry",
      "Precalculus",
      "AP Calculus BC",
      "Differential Equations",
      "Pre-Algebra",
      "Algebra 2",
      "Statistics & probability",
      "AP Statistics",
      "Linear Algebra"
    ]
  },
  {
    subject: "Art",
    classes: [
      "Early math",
      "Alegbra 1",
      "Trigonometry",
      "AP Claculus AB",
      "Multivariable calculus",
      "Arthimetic",
      "Geometry",
      "Precalculus",
      "AP Calculus BC",
      "Differential Equations",
      "Pre-Algebra",
      "Algebra 2",
      "Statistics & probability",
      "AP Statistics",
      "Linear Algebra"
    ]
  },
  {
    subject: "Economics",
    classes: [
      "Early math",
      "Alegbra 1",
      "Trigonometry",
      "AP Claculus AB",
      "Multivariable calculus",
      "Arthimetic",
      "Geometry",
      "Precalculus",
      "AP Calculus BC",
      "Differential Equations",
      "Pre-Algebra",
      "Algebra 2",
      "Statistics & probability",
      "AP Statistics",
      "Linear Algebra"
    ]
  },
  {
    subject: "Test Prep",
    classes: [
      "Early math",
      "Alegbra 1",
      "Trigonometry",
      "AP Claculus AB",
      "Multivariable calculus",
      "Arthimetic",
      "Geometry",
      "Precalculus",
      "AP Calculus BC",
      "Differential Equations",
      "Pre-Algebra",
      "Algebra 2",
      "Statistics & probability",
      "AP Statistics",
      "Linear Algebra"
    ]
  }
];
