import React from "react";

function AttendanceList({ records }) {
  const groupedRecords = records.reduce((acc, record) => {
    if (!acc[record.className]) {
      acc[record.className] = [];
    }
    acc[record.className].push(record);
    return acc;
  }, {});

  return (
    <div className="attendance-list">
      <h2>Attendance Records</h2>
      {Object.keys(groupedRecords).map((className) => (
        <div key={className} className="class-group">
          <h3>{className}</h3>
          <ul>
            {groupedRecords[className].map((record, index) => (
              <li key={index}>{record.attendanceDate}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default AttendanceList;
