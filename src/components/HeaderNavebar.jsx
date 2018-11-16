import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { render } from "react-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";


class HeaderNaveBar extends Component {
  state = {};
  render() {
    return (
      <div className="headerNav">
        <style jsx>{`
          .headerNav {
            height: 70px;
            border: 1px white solid;
            color: white;
          }
            .headerNav:hover {
                color: blue;
                background-color: white;
            }            
          th {
            cellspacing="10";
            cellpadding="13";
          }

          .table thead th {
              border: 0;
          }
        `}</style>
        <table className="table">
          <thead>
            <tr>
              <th> Courses</th>
              <th>Search</th>
              <FontAwesomeIcon icon={['fas', 'fa-leaf']} />
              <th><i className="fas fa-leaf">Khan Academy</i></th>
              <th>Donate</th>
              <th>Login</th>
              <th>Sign up</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}

export default HeaderNaveBar;
