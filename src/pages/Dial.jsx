import React, { useState } from "react";
import { Box, Button, Grid, TextField, IconButton } from "@mui/material";
import BackspaceIcon from "@mui/icons-material/Backspace"; // Import the backspace icon

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
    setInput((prevInput) => prevInput.slice(0, -1)); // Remove the last character
  };

  return (
    <Box
      sx={{
        height: 500,
        backgroundColor: "white",
        borderRadius: 2,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        padding: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
        {/* Display field */}
        <TextField
          value={input}
          onChange={(e) => setInput(e.target.value)}
          variant="outlined"
          fullWidth
          sx={{
            fontSize: "1.5rem",
            textAlign: "center",
            flex: 1,
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
          spacing={3} // Increased spacing between buttons
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
                  backgroundColor: "#05a200",
                  "&:hover": { backgroundColor: "rgba(0,128,0,0.8)" },
                }}
                onClick={() => handleButtonClick(button)}
              >
                {button}
              </Button>
            </Grid>
          ))}
        </Grid>
      ))}
    </Box>
  );
};

export default Dial;
