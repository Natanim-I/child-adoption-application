import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { colors } from "../../../colors";
import "./index.scss";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
let navigateId;

const DonationTable = () => {
  const [rows, setRows] = useState([
    {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
    },
  ]);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "firstName", headerName: "First Name", width: 150 },
    { field: "lastName", headerName: "Last Name", width: 150 },
    { field: "email", headerName: "Email", width: 220 },
  ];

  useEffect(() => {
    fetch("http://localhost:5000/displayusers/showDonation").then((res) => {
      res
        .json()
        .then((result) => setRows(result.data))
        .catch((error) => console.error(error));
    });
  }, []);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to={`/admin/donations/${navigateId}`} className="viewButton">
              View
            </Link>
            {/* <div className='deleteButton'>Delete</div> */}
          </div>
        );
      },
    },
  ];

  return (
    <div
      style={{ height: 400, width: "100%", background: `${colors.widgetBg}` }}
    >
      <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onCellClick={(e) => {
          navigateId = e.id;
        }}
      />
    </div>
  );
};

export default DonationTable;
