import React, { useState } from "react";

function DateFilter({ onFilter }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleFilter = (e) => {
    e.preventDefault();
    if (startDate && endDate) {
      onFilter(startDate, endDate);
    }
  };

  return (
    <form onSubmit={handleFilter} className="date-filter-form">
      <div className="form-group">
        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="endDate">End Date</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <button type="submit">Filter Records</button>
    </form>
  );
}

export default DateFilter;
