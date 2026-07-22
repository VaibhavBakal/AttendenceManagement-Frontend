import { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { addStudent } from "../services/api";

function StudentForm({ loadStudents }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const saveStudent = async (e) => {

    e.preventDefault();

    await addStudent({
      name,
      email,
    });

    setName("");
    setEmail("");

    loadStudents();

    alert("Student Added Successfully");
  };

  return (
    <Card className="p-3 mb-3">
      <h3>Add Student</h3>

      <Form onSubmit={saveStudent}>

        <Form.Group className="mb-2">
          <Form.Label>Name</Form.Label>

          <Form.Control
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            required
          />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Email</Form.Label>

          <Form.Control
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />
        </Form.Group>

        <Button type="submit">
          Save Student
        </Button>

      </Form>
    </Card>
  );
}

export default StudentForm;