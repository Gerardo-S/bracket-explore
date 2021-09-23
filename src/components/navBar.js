import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuButton from "./menuButton";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import Fade from "@mui/material/Fade";
import { useMediaQuery, useTheme } from "@mui/material";

const navContent = (
  <Box sx={{ display: "flex", ml: 2, pl: 2 }}>
    <Typography variant="h6" component="div" sx={{ mr: "32px" }}>
      What's included?
    </Typography>
    <Typography variant="h6" component="div" sx={{ mr: "32px" }}>
      Pricing
    </Typography>
    <Typography variant="h6" component="div" sx={{ mr: "32px" }}>
      Sign In
    </Typography>
    <Button
      color="inherit"
      variant="contained"
      sx={{
        mr: 2,
        height: "40px",
        width: "141px",
        padding: 2,
        backgroundColor: "#0063cc",
        "&:hover": {
          backgroundColor: "#6188c7",
          borderColor: "#0062cc",
          boxShadow: "none",
        },
      }}
    >
      Get Started
    </Button>
  </Box>
);

export default function NavBar() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ height: 112 }}>
        <Toolbar
          sx={{
            mx: "auto",
            width: 1 / 2,
            height: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Brackets
          </Typography>
          {isMatch ? (
            <MenuButton
              open={open}
              onClick={handleClick}
              onClose={handleClose}
              anchorEl={anchorEl}
            />
          ) : (
            navContent
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
