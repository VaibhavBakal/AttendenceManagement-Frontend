import { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { markAttendance } from "../services/api";

function AttendanceForm({
  students,
  loadAttendance,
}) {

  const [attendance, setAttendance] =
    useState({
      studentId: "",
      attendanceDate: "",
      status: "PRESENT",
    });

  const submitAttendance = async (e) => {

    e.preventDefault();

    await markAttendance(attendance);

    alert("Attendance Saved");

    setAttendance({
      studentId: "",
      attendanceDate: "",
      status: "PRESENT",
    });

    loadAttendance();
  };

  return (
    <Card className="p-3 mb-3">

      <h3>Mark Attendance</h3>

      <Form onSubmit={submitAttendance}>

        <Form.Group className="mb-2">

          <Form.Label>
            Student
          </Form.Label>

          <Form.Select
            value={attendance.studentId}
            onChange={(e) =>
              setAttendance({
                ...attendance,
                studentId: e.target.value,
              })
            }
            required
          >
            <option value="">
              Select Student
            </option>

            {students.map((student) => (
              <option
                key={student.id}
                value={student.id}
              >
                {student.name}
              </option>
            ))}

          </Form.Select>

        </Form.Group>

        <Form.Group className="mb-2">

          <Form.Label>
            Attendance Date
          </Form.Label>

          <Form.Control
            type="date"
            value={attendance.attendanceDate}
            onChange={(e) =>
              setAttendance({
                ...attendance,
                attendanceDate:
                  e.target.value,
              })
            }
            required
          />

        </Form.Group>

        <Form.Group className="mb-2">

          <Form.Label>Status</Form.Label>

          <Form.Select
            value={attendance.status}
            onChange={(e) =>
              setAttendance({
                ...attendance,
                status: e.target.value,
              })
            }
          >
            <option>PRESENT</option>
            <option>ABSENT</option>
            <option>LEAVE</option>
          </Form.Select>

        </Form.Group>

        <Button type="submit">
          Save Attendance
        </Button>

      </Form>

    </Card>
  );
}

export default AttendanceForm;