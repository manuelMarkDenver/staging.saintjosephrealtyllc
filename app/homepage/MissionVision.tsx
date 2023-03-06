"use client";

import { Backdrop, Box, Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import Bar from "../homepage/components/Bar";
import { Parallax } from "react-parallax";

const MissionVision = () => {
  return (
    <Box className="h-screen" id="missionvision">
      <Parallax
        blur={5}
        bgImage="/images/parallax-bg.jpg"
        bgImageAlt="parallax background image"
        strength={400}
        className="h-full w-full"
      >
        <Box className="absolute inset bg-black opacity-50 h-screen w-screen z-0"></Box>
        <Container className="flex justify-center items-center absolute inset-0 w-screen h-full">
          <Grid2
            container
            spacing={{ xs: 0, md: 20 }}
            className="z-50 text-white absolute inset-0 transform translate-y-1/2 text-center"
          >
            <Grid2 xs={12} md={12}>
              <Box className="flex flex-col justify-center items-center px-20 md:px-0">
                <Typography
                  component="h2"
                  variant="h2"
                  className="font-rockness text-5xl md:text-7xl mb-0 md:mb-4"
                >
                  Mission
                </Typography>
                <Bar props="bg-creamish mb-2 md:mb-12" />
                <Typography
                  variant="caption"
                  className="italic xs:text-xs md:text-xl"
                >
                  To provide the highest equitable services and deliver quality
                  solutions in a timely manner to our customers. To help enhance
                  the community by changing one home at a time.
                </Typography>
              </Box>
            </Grid2>
            
            <Grid2 xs={12} md={12}>
              <Box className="flex flex-col justify-center items-center px-20 md:px-0">
                <Typography
                  component="h2"
                  variant="h2"
                  className="font-rockness text-5xl md:text-7xl mb-0 md:mb-4"
                >
                  Vision
                </Typography>
                <Bar props="bg-creamish mb-2 md:mb-12" />
                <Typography
                  variant="caption"
                  className="italic xs:text-xs md:text-xl"
                >
                  Our team stands on honesty, dedication, patience and
                  integrity.  We want to enhance our community by changing one
                  person at a time, one property at a time, and one street at a
                  time.   We seek to be great and we’re striving to be a pillar
                  in our industry.
                </Typography>
              </Box>
            </Grid2>
          </Grid2>
        </Container>
      </Parallax>
    </Box>
  );
};

export default MissionVision;
