import React from "react";
import Image from "next/image";
import styles from "./EventTab.module.scss";
import NextLink from "next/link";
import { useRouter } from "next/router";
import EventDetail from "./components/EventDetail/EventDetail";

interface Event {
  name: string;
  image: string;
  id: number;
}

interface EventTabProps {
  events: Event[];
}

const EventTab: React.FC<EventTabProps> = ({ events }) => {
  const router = useRouter();
  const { pathname } = router;
  console.log("pathname: " + pathname);

  const isGalleryRoute = pathname === "/gallery";
  const isGalleryOnEvents = pathname?.includes("Event");

  return isGalleryRoute ? (
    <div className={styles.tileContainer}>
      {events?.map((event) => (
        <div className={styles.tile} key={event?.id}>
          <div className={styles.imageContainer}>
            <Image
              src={`/${event.image}`}
              alt={event.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <NextLink
            href={`/gallery/${encodeURIComponent(event?.name)}`}
            key={event?.id}
            passHref
            scroll={false}
          >
            <div className={styles.tileCaption}>{event?.name}</div>
          </NextLink>
        </div>
      ))}
    </div>
  ) : isGalleryOnEvents ? (
    <EventDetail />
  ) : (
    <></>
  );
};

export default EventTab;
