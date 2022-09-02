import * as React from "react";
import PropTypes from "prop-types";
import { deleteNote, toggleNote } from "../utils/notes";
import { dateFormat } from "../utils/date";
import { Link } from "react-router-dom";
export default class NoteCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      archived: props.archived,
    };
    this.setArchived = this.setArchived.bind(this);
  }
  setArchived(id) {
    this.setState({ archived: !this.state.archived });
    toggleNote(id);
  }
  render() {
    const { id, title, body, createdAt, isSearch } = this.props;
    return (
      <div>
        {isSearch ? (
          <Link to={`/detail/${id}`} >
            <h2>{title}</h2>
          </Link>
        ) : (
          <h2>{title}</h2>
        )}
        <p>{dateFormat(createdAt)}</p>
        <div dangerouslySetInnerHTML={{ __html: body }} />
        {!isSearch && (
          <>
            <button onClick={() => deleteNote(id)}>Hapus</button>
            <button onClick={() => this.setArchived(id)}>
              {this.state.archived ? "Batal Arsip" : "Arsip"}
            </button>
          </>
        )}
      </div>
    );
  }
}

NoteCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  createdAt: PropTypes.string.isRequired,
  isSearch: PropTypes.bool,
};
