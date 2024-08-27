import React, { useState } from "react";
import AttendanceForm from "./components/AttendanceForm";
import AttendanceList from "./components/AttendanceList";
import ReportButton from "./components/ReportButton";
import DateFilter from "./components/DateFilter";
import "./App.css";
import "./components/DateFilter.css"; // New CSS file
import "./components/AttendanceList.css"; // New CSS file

function App() {
  const [attendances, setAttendances] = useState([]);
  const [classes, setClasses] = useState(["Math", "Science", "History"]);
  const [filteredRecords, setFilteredRecords] = useState([]);

  const handleAddAttendance = (attendance) => {
    setAttendances([...attendances, attendance]);
  };

  const handleAddClass = (newClass) => {
    setClasses([...classes, newClass]);
  };

  const handleFilter = (startDate, endDate) => {
    const filtered = attendances.filter(
      (record) =>
        record.attendanceDate >= startDate && record.attendanceDate <= endDate
    );
    setFilteredRecords(filtered);
  };

  return (
    <div className="app-container">
      <h1>Classroom Attendance Tracker</h1>
      <AttendanceForm
        onAddAttendance={handleAddAttendance}
        classes={classes}
        onAddClass={handleAddClass}
      />
      <DateFilter onFilter={handleFilter} />
      <AttendanceList
        records={filteredRecords.length > 0 ? filteredRecords : attendances}
      />
      <ReportButton records={attendances} />
    </div>
  );
}

export default App;
