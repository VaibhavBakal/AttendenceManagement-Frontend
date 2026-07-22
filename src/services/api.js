import axios from "axios";

const API_URL = "http://localhost:8080/api";

// Student APIs
export const getStudents = () =>
  axios.get(`${API_URL}/students`);

export const addStudent = (student) =>
  axios.post(`${API_URL}/students`, student);

// Attendance APIs
export const getAttendance = () =>
  axios.get(`${API_URL}/attendance`);

export const markAttendance = (attendance) =>
  axios.post(`${API_URL}/attendance`, attendance);

export const getAttendanceByStudent = (studentId) =>
  axios.get(`${API_URL}/attendance/student/${studentId}`);

export const getAttendanceByDate = (date) =>
  axios.get(`${API_URL}/attendance/date/${date}`);

// Bulk Attendance API
export const markBulkAttendance = (attendanceData) =>
  axios.post(`${API_URL}/attendance/bulk`, attendanceData);

// Export Attendance Excel API
export const exportAttendanceExcel = (date) =>
  axios.get(
    `${API_URL}/attendance/export/${date}`,
    {
      responseType: "blob",
    }
  );