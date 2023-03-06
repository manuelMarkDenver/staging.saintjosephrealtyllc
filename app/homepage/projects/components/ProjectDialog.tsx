"use client";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Box,
  Button,
  Slide,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { TransitionProps } from "@mui/material/transitions";
import axios from "axios";
import PhotoSlider from "./PhotoSlider";
import Typography from "@mui/material/Typography";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type Props = {
  open: boolean;
  handleClose: any;
  projId: number;
};

const ProjectDialog = ({ open, handleClose, projId }: Props) => {
  const [data, setData]: any = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("/api/projects/getProject", {
          params: {
            id: projId,
          },
        });
        setData(res?.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [projId]);

  if (!data) return <div>No data</div>;
  if (data.length) return <div>Loading...</div>;

  return (
    <>
      {data && (
        <Dialog
          open={open}
          TransitionComponent={Transition}
          // keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle> {data?.project?.project}</DialogTitle>
          <DialogContent>
            <Box className="mb-4">
            <PhotoSlider fetchedImages={data?.images} />
            </Box>
            <DialogContentText id="alert-dialog-slide-description">
              {data?.project?.description}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};

export default ProjectDialog;
