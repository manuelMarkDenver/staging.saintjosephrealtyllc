"use client";

import Image from "next/image";

import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#2b2c32" }} className="text-white py-24">
      <Container maxWidth="xl">
        <Stack
          direction="row"
          spacing={30}
          className="flex justify-center align-top"
        >
          <Box>
            <Image
              src="/images/site-logo.png"
              width={200}
              height={50}
              alt="Site logo"
              className="bg-white rounded-lg"
            />
          </Box>
          <Stack direction="column">
            <Typography variant="h6" sx={{ marginBottom: "0.5rem" }}>
              Contacts
            </Typography>
            <Typography variant="caption" sx={{ marginBottom: "0.5rem" }}>
              Toll Free (888)781-6227
            </Typography>
            <Typography variant="caption" sx={{ marginBottom: "0.5rem" }}>
              Efax (857)557-7188
            </Typography>
            <Typography variant="caption" sx={{ marginBottom: "0.5rem" }}>
              Local (857)557-6558
            </Typography>

            <Stack direction="row">
              <IconButton>
                <FacebookIcon className="text-white" />
              </IconButton>
              <IconButton>
                <TwitterIcon className="text-white" />
              </IconButton>
              <IconButton>
                <InstagramIcon className="text-white" />
              </IconButton>
            </Stack>
          </Stack>
          <Stack direction="column">
            <Typography variant="h6" sx={{ marginBottom: "0.5rem" }}>
              Address
            </Typography>
            <Typography variant="caption" sx={{ marginBottom: "0.5rem" }}>
              35 Village Rd Suite 100
            </Typography>
            <Typography variant="caption" sx={{ marginBottom: "0.5rem" }}>
              Middleton, MA, United States{" "}
            </Typography>
            <Typography variant="caption" sx={{ marginBottom: "0.5rem" }}>
              01949
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
