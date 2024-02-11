import { AutoFixHigh, ChevronRightOutlined } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
interface Props {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
  navItems: { link: string; label: string }[];
}
const Drawer: React.FC<Props> = ({
  handleDrawerToggle,
  mobileOpen,
  navItems,
}) => {
  return (
    <SwipeableDrawer
      open={mobileOpen}
      onOpen={handleDrawerToggle}
      onClose={handleDrawerToggle}
      ModalProps={{ keepMounted: true }}
      sx={{
        "& .MuiDrawer-paper": {
          width: 300,
          minWidth: 280,
          textAlign: "center",
          p: 2,
          backgroundColor: "primary.main",
          color: "#fff",
        },
      }}
    >
      <Box sx={{}}>
        <Typography variant="h6">Menu</Typography>
        <Divider />
        <List>
          <Link to={"/create"}>
            <Button
              fullWidth
              disableElevation
              variant="contained"
              endIcon={<AutoFixHigh />}
              color="secondary"
              sx={{ fontWeight: "bold" }}
            >
              Create a meme
            </Button>
          </Link>
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.link}
              onClick={handleDrawerToggle}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary={item.label} />
                  <IconButton edge="end" sx={{ color: "#fff" }}>
                    <ChevronRightOutlined color="inherit" />
                  </IconButton>
                </ListItemButton>
              </ListItem>
            </NavLink>
          ))}
        </List>
      </Box>
    </SwipeableDrawer>
  );
};

export default Drawer;
