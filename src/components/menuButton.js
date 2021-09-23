import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

export default function MenuButton(props) {
  const { open, onClick, onClose, anchorEl } = props;
  return (
    <div>
      <Button
        color="inherit"
        variant="contained"
        sx={{
          ml: 2,
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
        id="fade-button"
        aria-controls="fade-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={onClick}
      >
        Dashboard
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={onClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={onClose}>What's included?</MenuItem>
        <MenuItem onClick={onClose}>Pricing</MenuItem>
        <MenuItem onClick={onClose}>Sign In</MenuItem>
      </Menu>
    </div>
  );
}
