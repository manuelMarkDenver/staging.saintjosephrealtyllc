"use client";

import React, { useEffect, useState, lazy } from "react";
import CustomButton from "../../../components/CustomButton";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Project } from "@/app/Types/Project";

type Props = {
  projectProps: Project;
  projIndex: number;
  handleClickOpen?: any;
  clickHandler?: any;
  setProjectId?: any;
};

const placeholdersHouses = [
  "https://api.lorem.space/image/house?w=1200&h=800&hash=8B7BCDC2",
  "https://api.lorem.space/image/house?w=1200&h=800&hash=500B67FB",
  "https://api.lorem.space/image/house?w=1200&h=800&hash=A89D0DE6",
  "https://api.lorem.space/image/house?w=1200&h=800&hash=225E6693",
  "https://api.lorem.space/image/house?w=1200&h=800&hash=9D9539E7",
  "https://api.lorem.space/image/house?w=1200&h=800&hash=BDC01094",
  "https://api.lorem.space/image/house?w=1200&h=800&hash=7F5AE56A",
  "https://api.lorem.space/image/house?w=1200&h=800&hash=4F32C4CF",
  "https://api.lorem.space/image/house?w=1200&h=800&hash=B0E33EF4",
  "https://api.lorem.space/image/house?w=1200&h=800&hash=2D297A22",
];

const ProjectCard = ({ projectProps, projIndex, clickHandler }: Props) => {
  const { id, project, year, address, specs, description, price } =
    projectProps;

  return (
    <>
      <Card className="mr-5 text-center relative rounded-lg shadow-xl">
        <CardMedia
          className="h-96 object-cover"
          image={placeholdersHouses[projIndex]}
        />
        {/* <Box
        sx={{ clipPath: "polygon(0 62%, 100% 41%, 100% 100%, 0% 100%);" }}
        className="absolute bottom-0 w-full h-96 bg-gray-500 z-0"
      ></Box> */}
        <CardContent className="z-50 text-gray-700 relative">
          <Typography gutterBottom variant="h5" component="div">
            {project}
          </Typography>
          <Typography variant="body2">{address}</Typography>
          <Typography variant="body2">{year}</Typography>
        </CardContent>
        <CardActions className="flex justify-center items-center">
          <CustomButton
            onClick={() => clickHandler(id)}
            customStyle="py-2 px-6 hover:bg-white"
            type="submit"
          >
            Learn More
          </CustomButton>
        </CardActions>
      </Card>
    </>
  );
};

export default ProjectCard;
