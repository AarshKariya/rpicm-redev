import React from "react";
import Image from "next/image";
import styles from "./CampusTab.module.scss";
import NextLink from "next/link";
import { useRouter } from "next/router";
import CampusDetail from "./components/CampusDetail/CampusDetail";
import EventDetail from "../EventTab/components/EventDetail/EventDetail";

interface CampusTile {
  name: string;
  image: string;
  id: number;
}

interface CampusTabProps {
  campusTiles: CampusTile[];
}

const CampusTab: React.FC<CampusTabProps> = ({ campusTiles }) => {
  const router = useRouter();
  const { pathname } = router;

  console.log(pathname, "pathname");

  const isGalleryRoute = pathname === "/gallery";
  const isGalleryOnCampus = pathname.includes("Admin");
  const isGalleryOnEvents = pathname.includes("Event");

  console.log("isGalleryOnEvents", isGalleryOnEvents);
  console.log("isGalleryOnCampus", isGalleryOnCampus);

  return isGalleryRoute ? (
    <div className={styles.tileContainer}>
      {campusTiles?.map((tile) => (
        <div className={styles.tile} key={tile?.id}>
          <div className={styles.imageContainer}>
            <Image
              src={`/${tile.image}`}
              alt={tile?.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <NextLink
            href={`/gallery/${encodeURIComponent(tile?.name)}`}
            key={tile?.id}
            passHref
            scroll={false}
          >
            <div className={styles.tileCaption}>{tile?.name}</div>
          </NextLink>
        </div>
      ))}
    </div>
  ) : isGalleryOnCampus ? (
    <CampusDetail />
  ) : isGalleryOnEvents ? (
    <EventDetail />
  ) : (
    <></>
  );
};

export default CampusTab;
