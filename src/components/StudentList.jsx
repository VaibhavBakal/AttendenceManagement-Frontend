import { Card, Table } from "react-bootstrap";

function StudentList({ students }) {

  return (
    <Card className="p-3 mb-3">

      <h3>Students</h3>

      <Table bordered striped>

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>

          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
            </tr>
          ))}

        </tbody>

      </Table>

    </Card>
  );
}

export default StudentList;