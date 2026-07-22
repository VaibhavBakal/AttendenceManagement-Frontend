import { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { exportAttendanceExcel }
from "../services/api";

function ExportAttendance() {

  const [date, setDate] =
    useState("");

  const exportExcel =
    async () => {

      if (!date) {

        alert("Select Date");

        return;
      }

      const response =
        await exportAttendanceExcel(date);

      const url =
        window.URL.createObjectURL(
          new Blob([response.data])
        );

      const link =
        document.createElement("a");

      link.href = url;

      link.setAttribute(
        "download",
        `Attendance_${date}.xlsx`
      );

      document.body.appendChild(link);

      link.click();

      link.remove();
    };

  return (
    <Card className="p-3 mb-3">

      <h4>
        Export Attendance
      </h4>

      <Form.Control
        type="date"
        className="mb-2"
        value={date}
        onChange={(e)=>
          setDate(e.target.value)
        }
      />

      <Button
        onClick={exportExcel}
      >
        Export Excel
      </Button>

    </Card>
  );
}

export default ExportAttendance;