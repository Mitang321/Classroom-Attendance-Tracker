import React from "react";

function downloadCSV(records) {
  const header = ["Class Name", "Attendance Date"];
  const rows = records.map((record) => [
    record.className,
    record.attendanceDate,
  ]);
  const csvContent = `data:text/csv;charset=utf-8,${[header, ...rows]
    .map((e) => e.join(","))
    .join("\n")}`;

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "attendance_report.csv");
  document.body.appendChild(link);
  link.click();
}

function ReportButton({ records }) {
  return <button onClick={() => downloadCSV(records)}>Download Report</button>;
}

export default ReportButton;
