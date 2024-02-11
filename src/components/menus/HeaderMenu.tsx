import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AutoFixHigh, RocketLaunch } from "@mui/icons-material";
import { Link, NavLink, useLocation } from "react-router-dom";
interface Props {
  handleDrawerToggle: () => void;
  navItems: { link: string; label: string }[];
}

const HeaderMenu: React.FC<Props> = ({ handleDrawerToggle, navItems }) => {
  const location = useLocation();
  const pageName = () => {
    switch (location.pathname) {
      case "/":
        return "Za Meems";
      case "/about":
        return "About";
      case "/create":
        return "Create a meme";
      default:
        return "";
    }
  };

  return (
    <AppBar>
      <Container maxWidth="lg" sx={{ padding: { xs: 0 } }}>
        <Toolbar component={"nav"} sx={{ pb: 0.75 }}>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            display={"flex"}
            width={{ xs: "80vw", md: "fit-content" }}
            alignContent={"center"}
            justifyContent={{ xs: "space-between", md: "center" }}
            marginX={{ xs: "auto", md: "0" }}
            gap={1}
            pt={1}
            fontSize={{ xs: 35, md: 25 }}
          >
            <Typography variant="h6" display={{ xs: "block", md: "none" }}>
              {pageName()}
            </Typography>
            <RocketLaunch sx={{ alignSelf: "center" }} fontSize="inherit" />
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", md: "inline" } }}
            >
              Za Meems
            </Typography>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
              ml: 5,
              gap: 3,
            }}
          >
            {navItems.map((item) => (
              <NavLink className={"rounded"} to={item.link} key={item.label}>
                <IconButton color="inherit" sx={{ fontSize: 19 }}>
                  {item.label}
                </IconButton>
              </NavLink>
            ))}
            <Link to={"/create"}>
              <Button
                disableElevation
                variant="contained"
                endIcon={<AutoFixHigh />}
                color="secondary"
                sx={{ fontWeight: "bold" }}
              >
                Create a meme
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default HeaderMenu;
