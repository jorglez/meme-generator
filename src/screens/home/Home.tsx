import { Swiper, SwiperSlide } from "swiper/react";

import HeroText from "./HeroText";
import "swiper/css";
import { Box, Container, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import useApi, { Meme, TrendingMeme } from "../../hooks/useApi";
import { Autoplay, Pagination } from "swiper/modules";
import MemeSelector from "../../components/memeSelector/MemeSelector";
import { createSearchParams, useNavigate } from "react-router-dom";
const Home = () => {
  const { getTrending } = useApi();
  const navigate = useNavigate();

  const [memes, setMemes] = useState<TrendingMeme[]>();
  const [loading, setLoading] = useState<boolean>(false);

  const memeSelected = (meme: Meme) => {
    navigate({
      pathname: "create",
      search: createSearchParams({
        meme: meme.name,
      }).toString(),
    });
  };

  useEffect(() => {
    const loadMemes = async () => {
      setLoading(true);
      const results: TrendingMeme[] = await getTrending();
      setLoading(false);
      setMemes(results);
    };
    loadMemes();
  }, []);
  return (
    <>
      <HeroText text="Discover the Meme of the day" />
      <Container maxWidth="lg">
        <Box height={{ xs: 400, md: 300 }}>
          {!loading ? (
            <Swiper
              pagination={true}
              autoplay={true}
              modules={[Pagination, Autoplay]}
            >
              {memes?.map((meme) => (
                <SwiperSlide key={meme.title}>
                  <Box
                    component={"img"}
                    src={meme.url}
                    alt={meme.title}
                    sx={{
                      objectPosition: "center center",
                      objectFit: "contain",
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <Skeleton
              variant="rectangular"
              sx={{ width: "100%", height: "100%" }}
            />
          )}
        </Box>
        <Box mt={8}>
          <MemeSelector onSelect={(meme: Meme) => memeSelected(meme)} />
        </Box>
      </Container>
    </>
  );
};
export default Home;
