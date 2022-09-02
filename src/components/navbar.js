import * as React from "react";
import { Link } from "react-router-dom";
export default class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/">List</Link>
        <Link to="/add">Add</Link>
        <Link to="/search">Search</Link>
      </nav>
    );
  }
}
