import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { colors } from "../../../colors";
import { useState, useEffect } from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 150 },
  { field: "firstName", headerName: "First name", width: 180 },
  { field: "lastName", headerName: "Last name", width: 180 },
  { field: "email", headerName: "Email", width: 220 },
  {
    field: "dateofbirth",
    headerName: "Date of Birth",
    type: "date",
    width: 130,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 200,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const EmployeeTable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to="/admin/adopters/:userId" className="viewButton">
              View
            </Link>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];

  const [rows, setRows] = useState([
    {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      dateofbirth: "",
    },
  ]);

  useEffect(() => {
    fetch("http://localhost:5000/displayusers/showAdopter").then((res) => {
      res
        .json()
        .then((result) => setRows(result.data))
        .catch((error) => console.error(error));
    });
  }, []);

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
      />
    </div>
  );
};

export default EmployeeTable;
