import CampusDetail from "@/components/gallerySection/components/CampusTab/components/CampusDetail/CampusDetail";
import EventDetail from "@/components/gallerySection/components/EventTab/components/EventDetail/EventDetail";
import GalleryPage from "@/components/gallerySection/components/GalleryPage/GalleryPage";
import React from "react";

const GalleryRoute = () => {
  return (
    <>
      <GalleryPage />
      <CampusDetail />
      <EventDetail />
    </>
  );
};

export default GalleryRoute;
