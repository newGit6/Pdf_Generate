import React, { useState, useEffect } from "react";

const DateFields = () => {
  const [selectedReportType, setSelectedReportType] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  useEffect(() => {
    if (selectedReportType === "last6Months") {
      const today = new Date();
      const sixMonthsAgo = new Date(today.setMonth(today.getMonth() - 6));

      const formatDate = (date) => {
        const yyyy = date.getFullYear();
        const mm = String(date.getMonth() + 1).padStart(2, "0");
        const dd = String(date.getDate()).padStart(2, "0");
        return `${yyyy}-${mm}-${dd}`;
      };

      setToDate(formatDate(new Date()));
      setFromDate(formatDate(sixMonthsAgo));
    }
  }, [selectedReportType]);

  const handleReportTypeChange = (event) => {
    setSelectedReportType(event.target.value);
  };

  return (
    <div className="container">
      <div className="row mb-3">
        <div className="col-sm-12">
          <strong className="selectTimePeriod">Select Time Period</strong>
          <div
            className="d-flex justify-content-around p-3"
            style={{ marginLeft: "40px" }}
          >
            <label className="p-2 rounded radio-button-label">
              <input
                type="radio"
                name="reportType"
                value="byDate"
                className="radio-button me-2"
                checked={selectedReportType === "byDate"}
                onChange={handleReportTypeChange}
              />
              By Date
            </label>
            <label className="p-2 rounded radio-button-label">
              <input
                type="radio"
                name="reportType"
                value="byMonth"
                className="radio-button me-2"
                checked={selectedReportType === "byMonth"}
                onChange={handleReportTypeChange}
              />
              By Month
            </label>
            <label className="p-2 rounded radio-button-label">
              <input
                type="radio"
                name="reportType"
                value="last6Months"
                className="radio-button me-2"
                checked={selectedReportType === "last6Months"}
                onChange={handleReportTypeChange}
              />
              Last 6 Months
            </label>
            <label className="p-2 rounded radio-button-label">
              <input
                type="radio"
                name="reportType"
                value="fromBeginning"
                className="radio-button me-2"
                checked={selectedReportType === "fromBeginning"}
                onChange={handleReportTypeChange}
              />
              From Beginning to Till Date
            </label>
          </div>
        </div>
      </div>
      {selectedReportType === "byDate" && (
        <div className="row">
          <div className="col-sm-6">
            <div className="d-flex mb-3" style={{ marginLeft: "23%" }}>
              <div className="p-2">
                <strong>From</strong>
              </div>
              <div className="p-2 flex-grow-1">
                <input
                  type="date"
                  className="form-control w-75"
                  id="fromDate"
                  name="fromDate"
                  value={fromDate}
                  style={{ marginLeft: "70px" }}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="d-flex mb-3">
              <div className="p-2">
                <strong>To </strong>
              </div>
              <div className="p-2 flex-grow-1">
                <input
                  type="date"
                  className="form-control w-50"
                  id="toDate"
                  name="toDate"
                  value={toDate}
                  style={{ marginLeft: "70px" }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Other conditions */}
    </div>
  );
};

export default DateFields;
