import { Container, Typography } from "@mui/material";
import HeroText from "../home/HeroText";

const About = () => {
  return (
    <>
      <HeroText text="About" />
      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Typography variant="body1" color="initial">
          Responsive meme generator project made with React, Material UI
        </Typography>
      </Container>
    </>
  );
};

export default About;
