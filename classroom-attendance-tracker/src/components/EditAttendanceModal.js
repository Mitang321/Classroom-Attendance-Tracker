import React, { useState, useEffect } from "react";

function EditAttendanceModal({ record, isOpen, onClose, onSave }) {
  const [updatedRecord, setUpdatedRecord] = useState(
    record || { className: "", attendanceDate: "" }
  );

  useEffect(() => {
    setUpdatedRecord(record || { className: "", attendanceDate: "" });
  }, [record]);

  const handleSave = () => {
    onSave(updatedRecord);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Attendance</h2>
        <div className="form-group">
          <label htmlFor="className">Class Name</label>
          <input
            type="text"
            id="className"
            value={updatedRecord.className}
            onChange={(e) =>
              setUpdatedRecord({ ...updatedRecord, className: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="attendanceDate">Attendance Date</label>
          <input
            type="date"
            id="attendanceDate"
            value={updatedRecord.attendanceDate}
            onChange={(e) =>
              setUpdatedRecord({
                ...updatedRecord,
                attendanceDate: e.target.value,
              })
            }
          />
        </div>
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default EditAttendanceModal;
