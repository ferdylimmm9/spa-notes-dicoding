import * as React from "react";
import SearchBarWrapper from "../components/search-bar";
import { useSearchParams } from "react-router-dom";
import { getNotesByTitle } from "../utils/index";
import NoteCard from "../components/note-card";
export default function SearchPage() {
  const [params] = useSearchParams();
  const title = params.get("title");
  const notes = getNotesByTitle(title);
  return (
    <main>
      <SearchBarWrapper />
      {notes.length
        ? notes.map((note) => (
            <NoteCard {...note} isSearch={true} key={note.id} />
          ))
        : `Judul ${title} tidak ada didalam pencarian`}
    </main>
  );
}
