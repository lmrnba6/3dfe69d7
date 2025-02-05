import React from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import "../css/loader.css";

const Loader = ({ loading }) => {
  return (
    <Backdrop className="loader-backdrop" open={loading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loader;
