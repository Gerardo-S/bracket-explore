import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuButton from "./menuButton";
import { useMediaQuery, useTheme } from "@mui/material";
import NavContent from "./navContent";
import Logo from "./logo";

export default function NavBar(props) {
  const { data } = props;
  const navLink1 = data.allContentfulHeader.edges[0].node.header;
  const navLink2 = data.allContentfulHeader.edges[0].node.navItem2;
  const navLink3 = data.allContentfulHeader.edges[0].node.navItem3;
  const navBttn = data.allContentfulHeader.edges[0].node.navButton;
  const logoData = data.allContentfulHeader.edges[0].node.logo;

  const dataArray = [navLink1, navLink2, navLink3, navBttn];
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
      <AppBar
        position="static"
        sx={{
          height: 112,
          background: theme.palette.primary.sencondaryGradient,
        }}
      >
        <Toolbar
          sx={{
            mx: "auto",
            width: 3 / 4,
            height: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" component="div" sx={{ flexGrow: 2 }}>
            <Logo logoData={logoData} />
          </Typography>
          {isMatch ? (
            <MenuButton
              open={open}
              onClick={handleClick}
              onClose={handleClose}
              anchorEl={anchorEl}
              text={dataArray}
              theme={theme}
            />
          ) : (
            <NavContent dataArray={dataArray} theme={theme} />
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
