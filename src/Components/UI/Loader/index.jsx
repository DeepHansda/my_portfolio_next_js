import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";

function Loader({ isLoading }) {
  return (
    <Backdrop
      sx={{
        width: "100%",
        height: "100vh",
        top: 0,
        position: "fixed",
        backdropFilter: "blur(10px)",
        background: "rgba(0, 0, 0, 0.8)",
        zIndex: 80,
      }}
      open={isLoading}
      //   onClick={handleClose}
    >
      <CircularProgress sx={{ color: "#fff" }} />
    </Backdrop>
  );
}

export default Loader;
