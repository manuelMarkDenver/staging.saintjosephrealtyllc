"use client";

import {
  Box,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import Bar from "../components/Bar";
import Form from "./Form";

const services = [
  "Leasing",
  "Manage contractor",
  "Eviction",
  "Landscaping",
  "Snow removal",
  "Maintenance",
  "Collect Rent",
  "Clean-out",
  "Deep Cleaning",
  "Sell & Buy Properties",
  "Remodeling",
  "Home Décor",
  "Staging",
];

const Contact = () => {
  return (
    <Box className="bg-creamish text-black" id="contactus">
      <Container className=" py-24">
        <Grid2 container>
          <Grid2 xs={12} md={5} className="flex flex-col justify-between">
            <Typography component="h2" variant="h2" className="font-rockness text-5xl md:text-7xl text-center md:text-left">
              Contact Us
            </Typography>
            <Box>
              <Bar props="bg-darkish" />
              <Typography
                variant="caption"
                className="italic text-lg text-gray-700"
              >
                We are just an email away!
              </Typography>
            </Box>
          </Grid2>
          <Grid2 xs={12} md={7}>
            <Form />
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default Contact;
