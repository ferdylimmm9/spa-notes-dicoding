import * as React from "react";
import PropTypes from "prop-types";
import { dateFormat } from "../utils/date";
import { Link } from "react-router-dom";
import SweetAlert from "sweetalert2";
export default class NoteCard extends React.Component {
  render() {
    const {
      id,
      title,
      body,
      createdAt,
      isSearch,
      archived,
      onDelete,
      onToggle,
      isHideActions,
    } = this.props;
    return (
      <div className="note-card">
        {isSearch ? (
          <Link to={`/detail/${id}`} style={{ textAlign: "left" }}>
            Judul : {title}
          </Link>
        ) : (
          <h2>Judul : {title}</h2>
        )}
        {!isSearch && (
          <>
            <p>Tanggal : {dateFormat(createdAt)}</p>
            <div dangerouslySetInnerHTML={{ __html: body }} />
            {!isHideActions && (
              <section className="action-container">
                <button
                  onClick={() =>
                    SweetAlert.fire({
                      showCancelButton: true,
                      cancelButtonText: "Batal",
                      confirmButtonText: "Hapus",
                      confirmButtonColor: "red",
                      icon: "warning",
                      text: "Yakin untuk menghapus catatan?",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        onDelete();
                      }
                    })
                  }
                >
                  Hapus
                </button>
                <button
                  onClick={() =>
                    SweetAlert.fire({
                      showCancelButton: true,
                      cancelButtonText: "Batal",
                      confirmButtonText: archived ? "Kembalikan" : "Arsipkan",
                      icon: "info",
                      text: `Yakin untuk ${
                        archived ? "kembalikan" : "arsipkan"
                      } catatan?`,
                    }).then((result) => {
                      if (result.isConfirmed) {
                        onToggle();
                        SweetAlert.fire({
                          icon: "success",
                          text: `Catatan berhasil ${
                            archived ? "dikembalikan" : "diarsip"
                          }`,
                        });
                      }
                    })
                  }
                >
                  {archived ? "Batal Arsip" : "Arsip"}
                </button>
              </section>
            )}
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
  isHideActions: PropTypes.bool,
  onDelete: PropTypes.func,
  onToggle: PropTypes.func,
};
