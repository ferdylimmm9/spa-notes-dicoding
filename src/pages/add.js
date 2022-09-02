import * as React from "react";
import NoteForm from "../components/note-form";
export default class AddPage extends React.Component {
  render() {
    return (
      <main>
        <h2>Tambah Catatan</h2>
        <NoteForm />
      </main>
    );
  }
}
