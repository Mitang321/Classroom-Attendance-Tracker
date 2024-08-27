import React, { useState } from "react";
import AttendanceForm from "./components/AttendanceForm";
import AttendanceList from "./components/AttendanceList";
import "./App.css";

function App() {
  const [attendances, setAttendances] = useState([]);
  const [classes, setClasses] = useState(["Math", "Science", "History"]);

  const handleAddAttendance = (attendance) => {
    setAttendances([...attendances, attendance]);
  };

  const handleAddClass = (newClass) => {
    setClasses([...classes, newClass]);
  };

  return (
    <div className="app-container">
      <h1>Classroom Attendance Tracker</h1>
      <AttendanceForm
        onAddAttendance={handleAddAttendance}
        classes={classes}
        onAddClass={handleAddClass}
      />
      <AttendanceList records={attendances} />
    </div>
  );
}

export default App;
