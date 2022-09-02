import * as React from "react";
import Navbar from "./navbar";
export default class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Notes</h1>
        <Navbar />
      </header>
    );
  }
}
