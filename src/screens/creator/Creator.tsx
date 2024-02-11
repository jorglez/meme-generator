import {
  Backdrop,
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import HeroText from "../home/HeroText";
import MemeSelector from "../../components/memeSelector/MemeSelector";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import CloseIcon from "@mui/icons-material/Close";
import useApi, { Meme } from "../../hooks/useApi";
import { useEffect, useState } from "react";
import { DownloadOutlined } from "@mui/icons-material";

function Creator() {
  const { createMeme } = useApi();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [selected, setSelected] = useState<string>("");
  const [top, setTop] = useState("");
  const [bottom, setBottom] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [result, setResult] = useState<any>(null);

  const memeSelected = (meme: Meme) => {
    navigate({
      pathname: "/create",
      search: createSearchParams({
        meme: meme.name,
      }).toString(),
    });
  };

  const doCreateMeme = async () => {
    setIsLoading(true);
    const result = await createMeme(top, bottom, selected);
    setResult(result);
    setIsLoading(false);
    setShowModal(true);
    console.log(result);
  };

  const startDownload = () => {
    const element = document.createElement("a");
    element.href = result!;
    element.download = "image.jpg";
    element.click();
  };

  useEffect(() => {
    const activeMeme = searchParams.get("meme");
    setSelected(activeMeme || "10-Guy");
  }, [searchParams]);

  return (
    <>
      <HeroText text="Create your meme" />
      <Dialog open={showModal} onClose={() => setShowModal(false)}>
        <Box display={"flex"} width={"100%"} justifyContent={"flex-end"}>
          <IconButton
            aria-label="close"
            onClick={() => setShowModal(false)}
            sx={{
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <DialogTitle>Download your meme</DialogTitle>
        <DialogContent>
          <Box display={"flex"} flexDirection={"column"} gap={1}>
            <Button
              variant="contained"
              fullWidth
              color="secondary"
              startIcon={<DownloadOutlined />}
              onClick={startDownload}
            >
              Download
            </Button>
            <Box component={"img"} src={result} alt={result} />
          </Box>
        </DialogContent>
      </Dialog>
      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Backdrop
          open={isLoading}
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        />
        <Box mt={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8} md={6} lg={8}>
              <Stack spacing={2}>
                <FormControl>
                  <TextField
                    label="Top Text"
                    onChange={(e) => setTop(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <TextField
                    label="Top Bottom"
                    onChange={(e) => setBottom(e.target.value)}
                  />
                </FormControl>
                <Button
                  fullWidth
                  variant="contained"
                  disabled={(!top && !bottom) || isLoading}
                  onClick={doCreateMeme}
                >
                  Create meme
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={4} md={6} lg={4}>
              <Box
                sx={{
                  width: "100%",
                }}
                component="img"
                src={`/img/${selected}.jpeg`}
                alt={selected}
              />
            </Grid>
          </Grid>
        </Box>
        <MemeSelector onSelect={memeSelected} activeMeme={selected} />
      </Container>
    </>
  );
}

export default Creator;
