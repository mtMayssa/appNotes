import * as React from "react";
import { Note } from "../Models/note.model";
import Notes from "./Notes";

interface INoteListProps {
  notes: Note[];
  deleteNote: any;
}

const NoteList: React.FC<INoteListProps> = ({ notes, deleteNote }) => {
  const renderNotes = (): JSX.Element[] => {
    return notes.map((oneNote) => (
      <Notes key={oneNote.id} oneNote={oneNote} deleteNote={deleteNote} />
    ));
  };

  return (
    <>
      {" "}
      <h2 className="mt-3">Notes</h2>
      <div>{renderNotes()}</div>
    </>
  );
};

export default NoteList;
