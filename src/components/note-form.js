import * as React from "react";
import { addNote } from "../utils/notes";
export default class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      archived: false,
    };
    this.handleBody = this.handleBody.bind(this);
  }
  handleBody(event) {
    this.setState({ ...this.state, body: event.target.innerHTML });
  }
  render() {
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addNote({ ...this.state });
          this.setState({ title: "", body: "", archived: false });
        }}
      >
        <input
          type="text"
          placeholder="masukkan judul catatan"
          value={this.state.title}
          onChange={(event) =>
            this.setState({ ...this.state, title: event.target.value })
          }
        />
        <div
          data-placeholder="masukkan isi catatan"
          onInput={this.handleBody}
          dangerouslySetInnerHTML={{ __html: this.state.body }}
          contentEditable
        />
        <input
          type="checkbox"
          placeholder="apakah catatan ingin diarsip?"
          checked={this.state.archived}
          onChange={(event) =>
            this.setState({ ...this.state, archived: event.target.checked })
          }
        />
        <input type="submit" value="Tambah" />
      </form>
    );
  }
}
