import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { colors } from "../../../colors";
import { useState, useEffect } from "react";

const AdoptionTableOverview = () => {
  const [rows, setRows] = useState([
    {
      _id: "",
      firstName: "",
      lastName: "",
      email: "",
    },
  ]);

  useEffect(() => {
    fetch("http://localhost:5000/displayusers/showAdoptionOverview").then(
      (res) => {
        res
          .json()
          .then((result) => setRows(result.data))
          .catch((error) => console.error(error));
      }
    );
  }, []);
  return (
    <TableContainer
      component={Paper}
      style={{ background: `${colors.widgetBg}` }}
    >
      <Table sx={{ minWidth: 350 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Stage</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                {row.fullName}
              </TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.stage}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdoptionTableOverview;
