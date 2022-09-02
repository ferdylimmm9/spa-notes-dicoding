import * as React from "react";
import NoteCard from "../components/note-card";
import { deleteNote, getNotesByTitle, toggleNote } from "../utils/notes";

export default class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      archived: true,
      notes: getNotesByTitle(),
    };
    this.onDelete = this.onDelete.bind(this);
    this.onToggle = this.onToggle.bind(this);
  }
  onDelete(id) {
    deleteNote(id);
    this.setState({
      ...this.state,
      notes: getNotesByTitle(),
    });
  }
  onToggle(id) {
    toggleNote(id);
    this.setState({
      ...this.state,
      notes: getNotesByTitle(),
    });
  }
  render() {
    const notes = this.state.notes.filter(
      (note) => note.archived === this.state.archived
    );
    return (
      <main>
        <section className="tab-panel">
          <button
            className={`tab ${this.state.archived && "active-button"}`}
            onClick={() =>
              this.setState({
                ...this.state,
                archived: true,
              })
            }
          >
            Arsip
          </button>
          <button
            className={`tab ${!this.state.archived && "active-button"}`}
            onClick={() =>
              this.setState({
                ...this.state,
                archived: false,
              })
            }
          >
            Non Arsip
          </button>
        </section>
        <section className="tab-container">
          {notes.length
            ? notes.map((note) => (
                <NoteCard
                  key={note.id}
                  {...note}
                  onToggle={() => this.onToggle(note.id)}
                  onDelete={() => this.onDelete(note.id)}
                />
              ))
            : this.state.archived
            ? "Arsip Kosong"
            : "Catatan Kosong"}
        </section>
      </main>
    );
  }
}
