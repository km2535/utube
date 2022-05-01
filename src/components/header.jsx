import React, { Component } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import src from "../contents/youtube.png";
class Header extends Component {
  state = {
    search: "",
  };

  onChange = (e) => {
    this.setState({ search: e.target.value });
  };

  onClick = () => {
    this.props.setQuery(this.state.search);
  };
  render() {
    // console.log(this.state.search);
    // console.log(this.props);
    return (
      <header>
        <div className="logo">
          <img src={src} alt="" />
          <span className="logoName">Youtube</span>
        </div>
        <input
          className="searchInput"
          type="text"
          placeholder="Search..."
          onChange={this.onChange}
        ></input>
        <button className="biBtn" onClick={this.onClick}>
          <BiSearchAlt2 />
        </button>
      </header>
    );
  }
}

export default Header;
