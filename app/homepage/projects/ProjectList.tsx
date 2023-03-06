"use client";

import { useEffect, useState, Suspense, lazy } from "react";
import axios from "axios";
import { Box, Container, Typography } from "@mui/material";
import Slider from "react-slick";
import ProjectCard from "./components/ProjectCard";

const Progress = lazy(() => import("../../components/Progress"));
const ProjectDialog = lazy(() => import("./components/ProjectDialog"));

const ProjectList = (props: any) => {
  const [data, setData]: any = useState([]);
  const [projectId, setProjectId] = useState(null || 0);

  const onClickHandler = (projectId: number) => {
    handleClickOpen();
    setProjectId(projectId);
  };

  const [open, setOpen] = useState(false);
  

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("/api/projects/getProjects");
        setData(res?.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const settings = {
    centerMode: true,
    centerPadding: "60px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  if (!data)
    return (
      <Box>
        <Typography component="p" variant="h6">
          No projects yet.
        </Typography>
      </Box>
    );

  if (!data.length) return <Progress />;

  return (
    <>
      <Box>
        <Container className="py-24">
          <Suspense fallback={<Progress />}>
            <Slider {...settings}>
              {data &&
                data.map((project: any, index: number) => (
                  <ProjectCard
                    key={index}
                    projectProps={project}
                    projIndex={index}
                    clickHandler={onClickHandler}
                  />
                ))}
            </Slider>
          </Suspense>
        </Container>
      </Box>
      <ProjectDialog open={open} handleClose={handleClose} projId={projectId}  />
    </>
  );
};

export default ProjectList;

const Loading = () => {
  return (
    <Box>
      <Typography component="p" variant="h6">
        Loading...
      </Typography>
    </Box>
  );
};
