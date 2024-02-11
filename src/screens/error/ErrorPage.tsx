import Header from "../../components/menus/Header";
import HeroText from "../home/HeroText";
import { Box, Container, Typography } from "@mui/material";

function ErrorPage() {
  return (
    <>
      <Header />
      <Box mt={9} />
      <HeroText text="Error 404" />
      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Typography variant="h2" color="initial">
          Page not found
        </Typography>
      </Container>
    </>
  );
}

export default ErrorPage;
