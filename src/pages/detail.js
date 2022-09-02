import * as React from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import NoteCard from "../components/note-card";
import { getNoteById } from "../utils/notes";
import PageNotFound from "./_404";

export default function DetailPageWrapper() {
  const { id } = useParams();
  return <DetailPage id={parseFloat(id)} />;
}
class DetailPage extends React.Component {
  render() {
    const { id } = this.props;
    const note = getNoteById(id);
    return (
      <main>
        {note ? <NoteCard {...note} isHideActions={true} /> : <PageNotFound />}
      </main>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.number.isRequired,
};
