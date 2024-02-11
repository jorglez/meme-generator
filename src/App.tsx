import { Outlet } from "react-router-dom";
import Header from "./components/menus/Header";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <Header />
      <Container sx={{ mt: 9 }}>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
