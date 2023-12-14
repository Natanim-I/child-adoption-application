import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { colors } from "../../../colors";
import "./index.scss";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
let navigateId;

const AdoptionTable = ({ user }) => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "fullName", headerName: "Full name", width: 200 },
    { field: "email", headerName: "Email", width: 220 },
    { field: "stage", headerName: "Stage", width: 150 },
    { field: "status", headerName: "Status", width: 150 },
  ];

  const [rows, setRows] = useState([
    {
      id: "",
      fullName: "",
      email: "",
      stage: "",
      status: "",
    },
  ]);

  useEffect(() => {
    fetch(`http://localhost:5000/displayusers/showAdoption/${user.email}`).then(
      (res) => {
        res
          .json()
          .then((result) => setRows(result.data))
          .catch((error) => console.error(error));
      }
    );
  });

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link
              to={`/adopter/adoptions/${navigateId}`}
              className="viewButton"
            >
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

const mapStateToProps = ({ session }) => ({
  user: session.user,
});

export default connect(mapStateToProps)(AdoptionTable);
