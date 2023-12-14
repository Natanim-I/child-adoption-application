import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { colors } from "../../../colors";
import { useState, useEffect } from "react";
import "./index.scss";
import { Link } from "react-router-dom";

let navigateId;

const EmployeeTable = () => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "firstName", headerName: "First name", width: 180 },
    { field: "lastName", headerName: "Last name", width: 180 },
    {
      field: "email",
      headerName: "Email",
      width: 220,
    },
    {
      field: "levelofeducation",
      headerName: "Level of Education",
      width: 200,
    },
  ];

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to={`/admin/employees/${navigateId}`} className="viewButton">
              View
            </Link>
            {/* <div className='deleteButton'>Delete</div> */}
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
    fetch("http://localhost:5000/displayusers/showEmployee")
      .then((res) => {
        res
          .json()
          .then((result) => setRows(result.data))
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
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
        onCellClick={(e) => {
          navigateId = e.id;
        }}
      />
    </div>
  );
};

export default EmployeeTable;
