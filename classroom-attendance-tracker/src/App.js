import React, { useState } from "react";
import AttendanceForm from "./components/AttendanceForm";
import AttendanceList from "./components/AttendanceList";
import ReportButton from "./components/ReportButton";
import DateFilter from "./components/DateFilter";
import EditAttendanceModal from "./components/EditAttendanceModal";
import "./App.css";
import "./components/DateFilter.css";

import "./components/AttendanceList.css";
import "./components/EditAttendanceModal.css";

function App() {
  const [attendances, setAttendances] = useState([]);
  const [classes, setClasses] = useState(["Math", "Science", "History"]);
  const [filteredRecords, setFilteredRecords] = useState([]);
  const [editRecord, setEditRecord] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleEditRecord = (record) => {
    setEditRecord(record);
    setIsModalOpen(true);
  };

  const handleSaveRecord = (updatedRecord) => {
    const updatedRecords = attendances.map((record) =>
      record === editRecord ? updatedRecord : record
    );
    setAttendances(updatedRecords);
  };

  const handleDeleteRecord = (recordToDelete) => {
    const updatedRecords = attendances.filter(
      (record) => record !== recordToDelete
    );
    setAttendances(updatedRecords);
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
        onEdit={handleEditRecord}
        onDelete={handleDeleteRecord}
      />
      <ReportButton records={attendances} />
      <EditAttendanceModal
        record={editRecord}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveRecord}
      />
    </div>
  );
}

export default App;
