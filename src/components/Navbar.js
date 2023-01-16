import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box, Button, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar component="nav">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 4, display: { xs: "none", sm: "block" } }}
        >
          Logo
        </Typography>
        <Box sx={{ flexGrow: 2, display: { xs: "none", sm: "block" } }}>
          <Button color="info">Home</Button>
          <Button color="info">Jobs</Button>
          <Button color="info">About Us</Button>
          <Button color="info">Contact</Button>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: { lg: "flex", xs: "none", sm: "flex" },
            alignItems: "center",
            gap: 2,
          }}
        >
          <Button color="info">Sign In</Button>
          <Button variant="contained" color="info">
            Create Account
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
