import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./App.css";
import BlockList from "./Components/BlockList";
import CreateNotes from "./Components/CeateNotes";
import Header from "./Components/Header";
import NoteList from "./Components/NoteList";
import { Note } from "./Models/note.model";

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "Meetings",
      text: "Meeting with UI/UX Team",
      color: "#dfdfdf",
      date: new Date().toString(),
    },
  ]);
  const deleteNote = (id: string): void => {
    return setNotes(notes.filter((note) => note.id !== id));
  };
  return (
    <>
      <Header />

      <Container className="mt-5">
        {/* <BlockList /> */}
        <button>hello</button>
        <Row>
          <Col>
            <NoteList notes={notes} deleteNote={deleteNote} />
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <CreateNotes setNotes={setNotes} notes={notes} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
