import Typography from "@mui/material/Typography";
import { theme } from "../../theme";
import { yellow } from "@mui/material/colors";

function HeroText({ text }: { text: string }) {
  return (
    <Typography
      variant="h1"
      sx={{
        mt: 2,
        fontWeight: 700,
        backgroundImage: `linear-gradient(30deg, ${theme.palette.primary.main},  ${yellow[300]})`,
        backgroundRepeat: "repeat",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {text}
    </Typography>
  );
}

export default HeroText;
