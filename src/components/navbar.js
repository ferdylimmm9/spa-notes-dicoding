import * as React from "react";
import { Link } from "react-router-dom";
export default class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/">Daftar</Link>
        <Link to="/add">Tambah</Link>
        <Link to="/search">Cari</Link>
      </nav>
    );
  }
}
