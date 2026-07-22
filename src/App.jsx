import { useEffect, useState } from "react";

import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import BulkAttendance from "./components/BulkAttendance";
import AttendanceList from "./components/AttendanceList";
import ExportAttendance from "./components/ExportAttendance";

import {
  getStudents,
  getAttendance,
} from "./services/api";

function App() {

  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState([]);

  const loadStudents = async () => {
    try {
      const response = await getStudents();
      setStudents(response.data);
    } catch (error) {
      console.error("Error loading students:", error);
    }
  };

  const loadAttendance = async () => {
    try {
      const response = await getAttendance();
      setAttendance(response.data);
    } catch (error) {
      console.error("Error loading attendance:", error);
    }
  };

  useEffect(() => {
    loadStudents();
    loadAttendance();
  }, []);

  return (
    <div className="container mt-4">

      <h1 className="text-center mb-4">
        Attendance Management System
      </h1>

      {/* Add Student */}
      <StudentForm
        loadStudents={loadStudents}
      />

      {/* Student List */}
      <StudentList
        students={students}
      />

      {/* Export Attendance Excel */}
      <ExportAttendance />

      {/* Bulk Attendance with Checkbox */}
      <BulkAttendance
        students={students}
      />

      {/* Attendance Records */}
      <AttendanceList
        students={students}
        attendance={attendance}
        setAttendance={setAttendance}
      />

    </div>
  );
}

export default App;