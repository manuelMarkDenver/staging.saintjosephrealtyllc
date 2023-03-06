"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import Bar from "../homepage/components/Bar";

const Offers = () => {
  return (
    <Box bgcolor="#2b2c32" color="white" id="offers">
      <Container className="flex flex-row justify-center w-full py-24">
        <Grid2 container spacing={2}>
          <Grid2 xs={12} md={6} className="flex flex-col justify-between">
            <Typography
              component="h2"
              variant="h2"
              className="font-rockness text-5xl md:text-7xl text-center md:text-left"
            >
              What We Offer
            </Typography>
            <Bar props="bg-creamish" />
          </Grid2>
          <Grid2 xs={12} md={6}>
            <Stack direction={{ md: "column" }} spacing={6}>
              <Stack direction="row" spacing={1}>
                <Image
                  src="/images/star-white.svg"
                  alt="star"
                  width={130}
                  height={130}
                />
                <Box>
                  <Typography
                    component="h5"
                    variant="h6"
                    className="tracking-widest"
                  >
                    EXPERIENCED TEAM
                  </Typography>
                  <Typography
                    component="p"
                    variant="subtitle1"
                    className="text-gray-400"
                  >
                    Each of us is a master of our craft – we've worked a number
                    of years in our field and each have passion and creative
                    vision for every project we put our hands on.
                  </Typography>
                </Box>
              </Stack>

              <Stack direction="row" spacing={1}>
                <Image
                  src="/images/star-white.svg"
                  alt="star"
                  width={130}
                  height={130}
                />
                <Box>
                  <Typography
                    component="h5"
                    variant="h6"
                    className="tracking-widest"
                  >
                    QUALITY TO DIE FOR
                  </Typography>
                  <Typography
                    component="p"
                    variant="subtitle1"
                    className="text-gray-400"
                  >
                    We pay a lot of attention to each and every detail, because
                    we know that we are in charge of creating somebody's safe
                    haven. We partner up with the best craftsmen to ensure our
                    famed quality.
                  </Typography>
                </Box>
              </Stack>

              <Stack direction="row" spacing={1}>
                <Image
                  src="/images/star-white.svg"
                  alt="star"
                  width={130}
                  height={130}
                />
                <Box>
                  <Typography
                    component="h5"
                    variant="h6"
                    className="tracking-widest"
                  >
                    VISIONARIES OF THE FUTURE
                  </Typography>
                  <Typography
                    component="p"
                    variant="subtitle1"
                    className="text-gray-400"
                  >
                    We're not scared to go beyond the horizon. As the
                    visionaries of tomorrow, we won't say no to experimentation,
                    unusual materials, or unlikely combinations.
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default Offers;
