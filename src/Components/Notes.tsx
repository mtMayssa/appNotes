import * as React from "react";
import { Card, Button } from "react-bootstrap";
import { Note } from "../Models/note.model";

interface INotesProps {
  oneNote: Note;
  deleteNote: any;
}

const Notes: React.FC<INotesProps> = ({ oneNote, deleteNote }) => {
  return (
    <div className="mb-3">
      <Card style={{ backgroundColor: oneNote.color }}>
        <Card.Body>
          <Card.Title>{oneNote.title}</Card.Title>
          <Card.Text>{oneNote.text}</Card.Text>
          <Card.Subtitle className="text-muted">{oneNote.date}</Card.Subtitle>
          <Button
            className="mt-3"
            variant="danger"
            onClick={() => {
              deleteNote(oneNote.id);
              console.log("deleted", oneNote.id);
            }}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Notes;
