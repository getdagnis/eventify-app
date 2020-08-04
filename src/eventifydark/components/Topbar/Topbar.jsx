import React from "react";
import { Link } from "react-router-dom";

import "./Topbar.css";
import { SearchField } from "../SearchField/SearchField.jsx";
import { Button } from "../Button/Button";

export class Topbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoIsOpen: false,
    };
    this.toggleBtn = this.toggleBtn.bind(this);
  }
  toggleBtn() {
    console.log("toggle");
    this.setState({
      todoIsOpen: !this.state.todoIsOpen,
    });
  }
  render() {
    const { message, title, searchHandle } = this.props;
    const btnLink = this.state.todoIsOpen === false ? "/todo" : "/categories";
    const btnTitle = this.state.todoIsOpen === false ? "TODOs" : "Categories";
    return (
      <div className="topbar">
        <div className="top-left">
          <p>
            {message}
            <Link to="/">
              <span className="eventify-yellow">{title}</span>
            </Link>
          </p>
        </div>
        <div className="top-center">
          <SearchField
            className="topbar-search"
            placeHolder="Meklē kategorijās..."
            handleChange={searchHandle}
          />
        </div>
        <div className="top-right">
          <Link to={btnLink}>
            <Button
              title={btnTitle}
              class="button btn-small btn-dark"
              onChange={this.toggleBtn}
            />
          </Link>
        </div>
      </div>
    );
  }
}
