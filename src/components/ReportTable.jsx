import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const ReportTable = ({ data }) => {
  return (
    <>
      <Header />
      <div
        className="ReportTable"
        style={{
          border: "5px solid blue",
          padding: "5px",
        }}
      >
        <table className="table border">
          <thead className="table-dark">
            <tr style={{ color: "white", backgroundColor: "black" }}>
              <th>#</th>
              <th>Creation Date</th>
              <th>Drawing No</th>
              <th>Remarks</th>
              <th>Received Copies</th>
              <th>Revision</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data && data.length > 0 ? (
              data.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{new Date(item.creationDate).toLocaleDateString()}</td>
                  <td>{item.drawingNo || "N/A"}</td>
                  <td>{item.remarks || "N/A"}</td>
                  <td>{item.receivedCopies || "N/A"}</td>
                  <td>{item.revision || "N/A"}</td>
                  <td>{item.status || "N/A"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
        <Footer />
      </div>
    </>
  );
};

export default ReportTable;
