import React, { useState } from "react";
import { Box, Button, Grid, TextField, IconButton } from "@mui/material";
import BackspaceIcon from "@mui/icons-material/Backspace";
import CallIcon from "@mui/icons-material/Call";

const Dial = () => {
  const [input, setInput] = useState("");

  const buttons = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["*", "0", "#"],
  ];

  const handleButtonClick = (buttonValue) => {
    setInput((prevInput) => prevInput + buttonValue);
  };

  const handleBackspace = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const handleCall = () => {
    console.log("Calling: " + input);
  };

  return (
    <Box
      sx={{
        height: 500,
        backgroundColor: "#f4f4f7",
        borderRadius: 2,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        padding: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
        <TextField
          value={input}
          onChange={(e) => setInput(e.target.value)}
          variant="outlined"
          fullWidth
          sx={{
            fontSize: "1.5rem",
            textAlign: "center",
            flex: 1,
            backgroundColor: "#fff",
            borderRadius: 1,
          }}
        />
        <IconButton
          onClick={handleBackspace}
          sx={{
            backgroundColor: "#e0e0e0",
            "&:hover": { backgroundColor: "#d0d0d0" },
            borderRadius: "50%",
            padding: 1,
            marginLeft: 1,
          }}
        >
          <BackspaceIcon sx={{ fontSize: "2rem", color: "#333" }} />
        </IconButton>
      </Box>

      {buttons.map((row, rowIndex) => (
        <Grid
          container
          spacing={3}
          justifyContent="center"
          key={rowIndex}
          sx={{ flex: 1 }}
        >
          {row.map((button, index) => (
            <Grid item key={index}>
              <Button
                variant="contained"
                sx={{
                  width: 70,
                  height: 70,
                  borderRadius: "50%",
                  fontSize: "1.5rem",
                  backgroundColor: "#007aff",
                  "&:hover": { backgroundColor: "#0051a2" },
                }}
                onClick={() => handleButtonClick(button)}
              >
                {button}
              </Button>
            </Grid>
          ))}
        </Grid>
      ))}

      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
        <Button
          variant="contained"
          sx={{
            width: 70,
            height: 70,
            borderRadius: "50%",
            fontSize: "2rem",
            backgroundColor: "rgba(0,178,0,0.8)",
            "&:hover": { backgroundColor: "rgba(0,128,0,0.8)" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "20px",
          }}
          onClick={handleCall}
        >
          <CallIcon sx={{ fontSize: "2rem", color: "#fff" }} />
        </Button>
      </Box>
    </Box>
  );
};

export default Dial;
