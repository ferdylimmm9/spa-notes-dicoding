import * as React from "react";
import { addNote } from "../utils/index";
import SweetAlert from "sweetalert2";
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
        className="add-form"
        onSubmit={(event) => {
          event.preventDefault();
          SweetAlert.fire({
            text: "Anda yakin untuk menambahkannya?",
            icon: "info",
            showCancelButton: true,
            cancelButtonText: "Batal",
            confirmButtonText: "Tambah",
          }).then((result) => {
            if (result.isConfirmed) {
              addNote({ ...this.state });
              this.setState({ title: "", body: "", archived: false });
            }
          });
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
          className="text-box"
          data-placeholder="masukkan isi catatan"
          onInput={this.handleBody}
          contentEditable
        />
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="archived"
            checked={this.state.archived}
            onChange={(event) =>
              this.setState({ ...this.state, archived: event.target.checked })
            }
          />
          <label for="archived">apakah catatan ingin diarsip?</label>
        </div>
        <input type="submit" value="Tambah" />
      </form>
    );
  }
}
