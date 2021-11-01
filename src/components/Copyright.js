import React, { Component } from "react";
import {CopyrightContainer} from "../StyledComponents/CopyrightStyle"


export default class Copyright extends Component {
  render() {
    return (
      <CopyrightContainer>
        <h4>Other Links</h4>
        <ul>
          <li>
            <a href="https://github.com/wonkyDialup">
              Github{" "}
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/justin-gibbs-215319141/">
              LinkedIn
            </a>
          </li>{" "}
        </ul>
        <div>
          <p>
          Copyright © 2021 Strange Wheels Auto Sales. All rights reserved.
          </p>
        </div>
      </CopyrightContainer>
    );
  }
}