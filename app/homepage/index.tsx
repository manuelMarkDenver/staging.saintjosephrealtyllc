"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Bar from "../homepage/components/Bar";
import Offers from "./Offers";
import Services from "./Services";
import MissionVision from "./MissionVision";
import Projects from "./projects";
import Contact from "./contact";
import Link from "next/link";

const Homepage = (props: any) => {
  return (
    <>
      {/* Banner */}
      <Box>
        <Container className="py-24">
          <Stack
            direction={{ xs: "column", md: "row" }}
            sx={{ height: { xs: "auto", md: "70vh" } }}
          >
            <Box className="flex flex-col justify-between h-full">
              <Box>
                <Typography variant="h4" component="h2" className="font-inter">
                  Unique Property
                </Typography>
                <Typography
                  variant="h1"
                  component="h1"
                  className="font- font-rockness ml-4"
                >
                  Solution You Can Rely On
                </Typography>
                <a href="#contactus">
                  <Button
                    variant="outlined"
                    className="mt-10 py-4 px-10 rounded-lg bg-darkish text-white border-white hover:bg-creamish hover:text-black hover:border-darkish hover:font-bold hover:border-1"
                  >
                    Get A Quotation Today!
                  </Button>
                </a>
              </Box>

              <Box>
                <Bar props="bg-darkish" />
                <Typography
                  variant="caption"
                  className="italic text-lg text-gray-500 "
                >
                  Property management that fits your needs
                </Typography>
              </Box>
            </Box>
            <Box className="flex justify-center h-full relative">
              <Image
                src="/images/star-black.svg"
                alt="star"
                width={250}
                height={250}
                className="absolute -top-20 -right-32"
              />
              <Image
                src={"/images/banner/banner1.png"}
                width={800}
                height={800}
                alt="hero"
                className="object-cover"
              />
            </Box>
          </Stack>
        </Container>

        {/* Offers */}
        <Offers />

        {/* Projects */}
        <Box>
          <Container className="py-24">
            <Projects props={props} />
          </Container>
        </Box>

        {/* Services */}
        <Services />

        {/* Mission Vision */}
        <MissionVision />

        {/* Contact */}
        <Contact />
      </Box>
    </>
  );
};

export default Homepage;
