import * as React from "react";
import { useRef, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Note } from "../Models/note.model";

interface ICreateNotesProps {
  setNotes: any;
  notes: Note[];
}

const CreateNotes: React.FC<ICreateNotesProps> = ({ notes, setNotes }) => {
  const titleRef = useRef<HTMLInputElement | null>(null);
  const textRef = useRef<HTMLInputElement | null>(null);
  const colorRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState("");
  const handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void = (e) => {
    e.preventDefault();
    if (titleRef.current?.value === "" || textRef.current?.value === "") {
      return setError("Empty fields !!!");
    } else {
      setError("");
      setNotes([
        ...notes,
        {
          id: new Date().toString(),
          title: (titleRef.current as HTMLInputElement).value,
          text: textRef.current?.value,
          color: colorRef.current?.value,
          date: new Date().toString(),
        },
      ]);
    }
    (titleRef.current as HTMLInputElement).value = "";
    (textRef.current as unknown as HTMLTextAreaElement).value = "";
  };

  return (
    <>
      {" "}
      <h2>Create Notes</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form className="mt-3 mb-3" onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title for the Note"
            ref={titleRef}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Text</Form.Label>
          <Form.Control placeholder="Enter your notes" ref={textRef} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="colorInput">Notes Color</Form.Label>
          <Form.Control
            type="color"
            id="colorInput"
            defaultValue="#dfdfdf"
            title="Choose your color"
            ref={colorRef}
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default CreateNotes;
