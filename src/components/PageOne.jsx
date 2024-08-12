import React, { useState } from "react";
import DateFields from "./DateFields";
import ReportTable from "./ReportTable";
import GeneratePDF from "./GeneratePDF";

const PageOne = () => {
  const [reportType, setReportType] = useState("byDate");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [reportData, setReportData] = useState([]);

  const handleGoClick = () => {
    // Check if 'fromDate' and 'toDate' are provided when 'reportType' is 'byDate'
    if (reportType === "byDate" && (!fromDate || !toDate)) {
      alert("From Date and To Date are required for the 'byDate' report type.");
      return;
    }

    // Construct the URL
    const url = `https://api.chromacheer.com/api/pdf/report?reportType=RFI&designDrawingConsultantId=66b32b13e2119bb491d1726b&selectTimePeriod=${reportType}&fromDate=${fromDate}&toDate=${toDate}`;

    console.log("Fetching data from:", url);

    fetch(url)
      .then((response) => {
        console.log("Response status:", response.status);
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        setReportData(data); // Assuming data is an array
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <div className="container-fluid">
      <div className="container mt-5">
        <div className="card w-100 p-4 mt-5 card-Page">
          <p className="card-title mb-4 drawingTitle">
            Drawing Report Analysis
          </p>

          <div className="row RopDegin" style={{ marginLeft: "130px" }}>
            <div className="col-sm-6">
              <div className="d-flex mb-3" style={{ width: "80%" }}>
                <div className="p-2">
                  <strong>Report Type</strong>
                </div>
                <div className="p-2 flex-grow-1">
                  <select
                    className="form-select w-100"
                    id="reportTypeSelect"
                    name="reportType"
                    value={reportType}
                    onChange={(e) => setReportType(e.target.value)}
                  >
                    <option value="byDate">Drawing</option>
                    <option value="byDate">Rfi</option>
                    <option value="byDate">Pending</option>
                    <option value="byDate">Register</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="d-flex mb-3" style={{ width: "90%" }}>
                <div className="p-2">
                  <strong>Design Consultant</strong>
                </div>
                <div className="p-2 flex-grow-1">
                  <select
                    className="form-select w-100"
                    id="designConsultantSelect"
                    name="designConsultant"
                  >
                    <option>66b32b13e2119bb491d1726b</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <DateFields />

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
                    onChange={(e) => setFromDate(e.target.value)}
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
                    onChange={(e) => setToDate(e.target.value)}
                    style={{ marginLeft: "70px" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <strong style={{ marginLeft: "11%" }}>
            Select appropriate options to view / Download the Report
          </strong>
          <div
            className="d-flex justify-content-start "
            style={{ marginLeft: "11%" }}
          >
            <label className="p-2 rounded">
              <input
                type="radio"
                name="reportType"
                value="byDate"
                checked={reportType === "byDate"}
                onChange={(e) => setReportType(e.target.value)}
                className="me-2"
              />
              Download
            </label>
            <label className="p-2 rounded">
              <input
                type="radio"
                name="reportType"
                value="view"
                checked={reportType === "view"}
                onChange={(e) => setReportType(e.target.value)}
                className="me-2"
              />
              View
            </label>
          </div>
          <div className="d-flex justify-content-center">
            <div className="p-2">
              <button className="p-2 goButton" onClick={handleGoClick}>
                Go
              </button>
            </div>
            <div className="p-2">
              <button
                className="p-2 goButton"
                onClick={() => {
                  setReportType("byDate");
                  setFromDate("");
                  setToDate("");
                }}
              >
                Reset
              </button>
            </div>
          </div>

          {reportData.length > 0 && (
            <div>
              <ReportTable data={reportData} />
              <GeneratePDF data={reportData} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageOne;
