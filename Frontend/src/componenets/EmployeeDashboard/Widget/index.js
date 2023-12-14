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
  ChildCareOutlined,
  FamilyRestroomOutlined,
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
  return (
    <WidgetAll>
      <WidgetContainer to="/employee/adopters">
        <WidgetLeft>
          <WidgetTittle>Adopter</WidgetTittle>
          <WidgetCounter>{`${adopters}`}</WidgetCounter>
        </WidgetLeft>
        <WidgetRight>
          <WidgetIcon>
            <GroupOutlined />
          </WidgetIcon>
          <WidgetLink to="/employee/adopters">See all Adopters</WidgetLink>
        </WidgetRight>
      </WidgetContainer>
      <WidgetContainer to="/employee/children">
        <WidgetLeft>
          <WidgetTittle>Child</WidgetTittle>
          <WidgetCounter>{`${children}`}</WidgetCounter>
        </WidgetLeft>
        <WidgetRight>
          <WidgetIcon>
            <ChildCareOutlined />
          </WidgetIcon>
          <WidgetLink to="/employee/children">See all Children</WidgetLink>
        </WidgetRight>
      </WidgetContainer>
      <WidgetContainer to="/employee/adoptions">
        <WidgetLeft>
          <WidgetTittle>Adoptions</WidgetTittle>
          <WidgetCounter>{`${adoptions}`}</WidgetCounter>
        </WidgetLeft>
        <WidgetRight>
          <WidgetIcon>
            <FamilyRestroomOutlined />
          </WidgetIcon>
          <WidgetLink to="/employee/adoptions">See all Adoptions</WidgetLink>
        </WidgetRight>
      </WidgetContainer>
    </WidgetAll>
  );
};

export default Widget;
