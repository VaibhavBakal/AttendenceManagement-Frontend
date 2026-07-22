import { useState } from "react";
import {
  Card,
  Table,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";

import {
  getAttendance,
  getAttendanceByDate,
  getAttendanceByStudent,
} from "../services/api";

function AttendanceList({
  students,
  attendance,
  setAttendance,
}) {

  const [studentId, setStudentId] =
    useState("");

  const [date, setDate] =
    useState("");

  const loadAll = async () => {

    const response =
      await getAttendance();

    setAttendance(response.data);
  };

  const searchStudent = async () => {

    if (!studentId) return;

    const response =
      await getAttendanceByStudent(
        studentId
      );

    setAttendance(response.data);
  };

  const searchDate = async () => {

    if (!date) return;

    const response =
      await getAttendanceByDate(date);

    setAttendance(response.data);
  };

  return (
    <Card className="p-3">

      <h3>Attendance Records</h3>

      <Row className="mb-3">

        <Col md={4}>
          <Form.Select
            value={studentId}
            onChange={(e) =>
              setStudentId(e.target.value)
            }
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
        </Col>

        <Col md={2}>
          <Button
            onClick={searchStudent}
          >
            Search Student
          </Button>
        </Col>

        <Col md={3}>
          <Form.Control
            type="date"
            value={date}
            onChange={(e) =>
              setDate(e.target.value)
            }
          />
        </Col>

        <Col md={2}>
          <Button
            variant="success"
            onClick={searchDate}
          >
            Search Date
          </Button>
        </Col>

        <Col md={1}>
          <Button
            variant="secondary"
            onClick={loadAll}
          >
            All
          </Button>
        </Col>

      </Row>

      <Table bordered striped>

        <thead>
          <tr>
            <th>ID</th>
            <th>Student</th>
            <th>Email</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {attendance.map((a) => (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>{a.student.name}</td>
              <td>{a.student.email}</td>
              <td>{a.attendanceDate}</td>
              <td>{a.status}</td>
            </tr>
          ))}

        </tbody>

      </Table>

    </Card>
  );
}

export default AttendanceList;