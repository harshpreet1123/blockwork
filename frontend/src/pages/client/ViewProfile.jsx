import React from "react";
import { useLocation } from "react-router-dom";

const ViewProfile = () => {
  const location = useLocation();
  const state = location.state;
  return <div>{state.userData.username}</div>;
};

export default ViewProfile;
