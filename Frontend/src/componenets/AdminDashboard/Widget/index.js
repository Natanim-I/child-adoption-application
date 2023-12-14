import React, { useState, useEffect } from "react";
import {
  WidgetAll,
  WidgetContainer,
  WidgetLeft,
  WidgetRight,
  WidgetTittle,
  WidgetCounter,
  WidgetIcon,
  WidgetLink,
} from "./WidgetElements";
import {
  GroupOutlined,
  EngineeringOutlined,
  ChildCareOutlined,
  FamilyRestroomOutlined,
  VolunteerActivismOutlined,
} from "@mui/icons-material";

const Widget = () => {
  const [adopters, setAdopters] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/general/countAdopters").then((res) => {
      res
        .json()
        .then((result) => setAdopters(result.data))
        .catch((error) => console.error(error));
    });
  });

  const [employees, setEmployees] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/general/countEmployees").then((res) => {
      res
        .json()
        .then((result) => setEmployees(result.data))
        .catch((error) => console.error(error));
    });
  });

  const [children, setChildren] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/general/countChildren").then((res) => {
      res
        .json()
        .then((result) => setChildren(result.data))
        .catch((error) => console.error(error));
    });
  });
  const [adoptions, setAdoptions] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/general/countAdoptions").then((res) => {
      res
        .json()
        .then((result) => setAdoptions(result.data))
        .catch((error) => console.error(error));
    });
  });
  const [donations, setDonations] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/general/countDonations").then((res) => {
      res
        .json()
        .then((result) => setDonations(result.data))
        .catch((error) => console.error(error));
    });
  });
  return (
    <WidgetAll>
      <WidgetContainer to="/admin/employees">
        <WidgetLeft>
          <WidgetTittle>Employee</WidgetTittle>
          <WidgetCounter>{`${employees}`}</WidgetCounter>
        </WidgetLeft>
        <WidgetRight>
          <WidgetIcon>
            <EngineeringOutlined />
          </WidgetIcon>
          <WidgetLink to="/admin/employees">See all Employees</WidgetLink>
        </WidgetRight>
      </WidgetContainer>
      <WidgetContainer to="/admin/adopters">
        <WidgetLeft>
          <WidgetTittle>Adopter</WidgetTittle>
          <WidgetCounter>{`${adopters}`}</WidgetCounter>
        </WidgetLeft>
        <WidgetRight>
          <WidgetIcon>
            <GroupOutlined />
          </WidgetIcon>
          <WidgetLink to="/admin/adopters">See all Adopters</WidgetLink>
        </WidgetRight>
      </WidgetContainer>
      <WidgetContainer to="/admin/children">
        <WidgetLeft>
          <WidgetTittle>Child</WidgetTittle>
          <WidgetCounter>{`${children}`}</WidgetCounter>
        </WidgetLeft>
        <WidgetRight>
          <WidgetIcon>
            <ChildCareOutlined />
          </WidgetIcon>
          <WidgetLink to="/admin/children">See all Children</WidgetLink>
        </WidgetRight>
      </WidgetContainer>
      <WidgetContainer to="/admin/adoptions">
        <WidgetLeft>
          <WidgetTittle>Adoptions</WidgetTittle>
          <WidgetCounter>{`${adoptions}`}</WidgetCounter>
        </WidgetLeft>
        <WidgetRight>
          <WidgetIcon>
            <FamilyRestroomOutlined />
          </WidgetIcon>
          <WidgetLink to="/admin/adoptions">See all Adoptions</WidgetLink>
        </WidgetRight>
      </WidgetContainer>
      <WidgetContainer to="/admin/donations">
        <WidgetLeft>
          <WidgetTittle>Donations</WidgetTittle>
          <WidgetCounter>{`${donations}`}</WidgetCounter>
        </WidgetLeft>
        <WidgetRight>
          <WidgetIcon>
            <VolunteerActivismOutlined />
          </WidgetIcon>
          <WidgetLink to="/admin/donations">See all Donations</WidgetLink>
        </WidgetRight>
      </WidgetContainer>
    </WidgetAll>
  );
};

export default Widget;
