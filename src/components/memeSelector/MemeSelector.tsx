import { useEffect, useState } from "react";
import useApi, { Meme } from "../../hooks/useApi";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import { theme } from "../../theme";
interface MemeProps {
  activeMeme?: string;
  onSelect: (meme: Meme) => void;
}

const MemeSelector: React.FC<MemeProps> = ({
  activeMeme = "10-Guy",
  onSelect,
}) => {
  const { getMemes } = useApi();
  const [memes, setMemes] = useState<Meme[]>([]);

  const memeSelected = (meme: Meme) => {
    onSelect(meme);
  };

  useEffect(() => {
    const loadMemes = async () => {
      const results = await getMemes();
      setMemes(results);
    };
    loadMemes();
  }, []);
  return (
    <>
      <Typography variant="h3" color="initial" mt={5}>
        Select your meme
      </Typography>
      <Grid container spacing={1}>
        {memes.map((meme) => (
          <Grid item key={meme.name} sx={{ cursor: "pointer" }} xs={4} md={3}>
            <Box
              onClick={() => memeSelected(meme)}
              component={"img"}
              src={meme.image}
              alt={meme.name}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                outline:
                  activeMeme === meme.name
                    ? `3px solid ${theme.palette.secondary.dark}`
                    : "",
              }}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default MemeSelector;
