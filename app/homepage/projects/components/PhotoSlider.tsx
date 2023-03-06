"use client";

import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import { Container } from "@mui/material";

const PhotoSlider = ({ fetchedImages }: any) => {
  const [images, setImages] = useState<any>([]);

  const imagesArr = images?.filter((image: string) => {
    return !/\.(mp4)$/.test(image);
  });

  useEffect(() => {
    const fetchImages = async () => {
      setImages(fetchedImages);
    };

    if (fetchedImages) {
      fetchImages();
    }
  }, [imagesArr]);

  let newArr: any = [];

  const imagesMutatedArray = (images: string[]) => {
    for (let index = 0; index < images?.length; index++) {
      newArr.push({
        original: `/images/projects/project-1/${images[index]}`,
        thumbnail: `/images/projects/project-1/${images[index]}`,
      });
    }
    return newArr;
  };

  const settings: any = {
    showPlayButton: false,
    thumbnailPosition: "right",
    loading: true,
    thumbnailLoading: true,
  };

  return (
    <Container>
      <ImageGallery items={imagesMutatedArray(imagesArr)} {...settings}/>
    </Container>
  );
};

export default PhotoSlider;
