import React, { useState } from "react";

function AttendanceForm({ onAddAttendance, classes, onAddClass }) {
  const [selectedClass, setSelectedClass] = useState("");
  const [attendanceDate, setAttendanceDate] = useState("");
  const [newClassName, setNewClassName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedClass && attendanceDate) {
      onAddAttendance({ className: selectedClass, attendanceDate });
      setAttendanceDate("");
    }
  };

  const handleAddClass = (e) => {
    e.preventDefault();
    if (newClassName) {
      onAddClass(newClassName);
      setNewClassName("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="attendance-form">
        <div className="form-group">
          <label htmlFor="className">Select Class</label>
          <select
            id="className"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            <option value="">Select a class</option>
            {classes.map((className, index) => (
              <option key={index} value={className}>
                {className}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="attendanceDate">Attendance Date</label>
          <input
            type="date"
            id="attendanceDate"
            value={attendanceDate}
            onChange={(e) => setAttendanceDate(e.target.value)}
          />
        </div>
        <button type="submit">Add Attendance</button>
      </form>

      <form onSubmit={handleAddClass} className="add-class-form">
        <div className="form-group">
          <label htmlFor="newClassName">New Class Name</label>
          <input
            type="text"
            id="newClassName"
            value={newClassName}
            onChange={(e) => setNewClassName(e.target.value)}
            placeholder="Enter new class name"
          />
        </div>
        <button type="submit">Add Class</button>
      </form>
    </div>
  );
}

export default AttendanceForm;
