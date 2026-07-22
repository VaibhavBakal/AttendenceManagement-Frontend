import { useState } from "react";
import {
  Card,
  Table,
  Button,
  Form
} from "react-bootstrap";
import axios from "axios";

function BulkAttendance({ students }) {

  const [selectedStudents,
         setSelectedStudents] =
         useState([]);

  const [attendanceDate,
         setAttendanceDate] =
         useState("");

  const [status,
         setStatus] =
         useState("PRESENT");

  const handleCheckbox =
    (studentId) => {

      if(
        selectedStudents.includes(
          studentId
        )
      ) {

        setSelectedStudents(
          selectedStudents.filter(
            id => id !== studentId
          )
        );

      } else {

        setSelectedStudents([
          ...selectedStudents,
          studentId
        ]);
      }
  };

  const saveAttendance =
    async () => {

      await axios.post(
          "https://attendencemanagement-backend-4.onrender.com/api/attendance/bulk",
        {
          studentIds:
            selectedStudents,
          attendanceDate,
          status
        }
      );

      alert(
        "Attendance Saved Successfully"
      );

      setSelectedStudents([]);
    };

  return (
    <Card className="p-3">

      <h3>
        Bulk Attendance
      </h3>

      <div className="mb-3">

        <Form.Control
          type="date"
          value={attendanceDate}
          onChange={(e)=>
            setAttendanceDate(
              e.target.value
            )
          }
        />

      </div>

      <div className="mb-3">

        <Form.Select
          value={status}
          onChange={(e)=>
            setStatus(
              e.target.value
            )
          }
        >
          <option>
            PRESENT
          </option>

          <option>
            ABSENT
          </option>

          <option>
            LEAVE
          </option>

        </Form.Select>

      </div>

      <Table bordered>

        <thead>
          <tr>
            <th>Select</th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>

          {students.map(
            (student)=>(
            <tr
              key={student.id}
            >
              <td>

                <input
                  type="checkbox"
                  checked={
                    selectedStudents.includes(
                      student.id
                    )
                  }
                  onChange={() =>
                    handleCheckbox(
                      student.id
                    )
                  }
                />

              </td>

              <td>
                {student.id}
              </td>

              <td>
                {student.name}
              </td>

              <td>
                {student.email}
              </td>
            </tr>
          ))}

        </tbody>

      </Table>

      <Button
        onClick={
          saveAttendance
        }
      >
        Save Attendance
      </Button>

    </Card>
  );
}

export default BulkAttendance;
