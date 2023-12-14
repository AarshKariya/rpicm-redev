import { motion } from "framer-motion";
import Footer from "@/components/footer/FooterPage";
import NavigationBar from "@/components/navigationBar/NavigationBar";
import { useRouter } from "next/router";
import Image from "next/image";
import Slideshow from "../ImageSlideshow/Slideshow";

const imagesArray = [
  { id: 1, src: "/gallery1.svg", width: 600, height: 400 },
  { id: 2, src: "/gallery2.svg", width: 600, height: 400 },
  { id: 3, src: "/gallery3.svg", width: 600, height: 400 },
  { id: 4, src: "/gallery4.svg", width: 600, height: 400 },
  { id: 5, src: "/gallery5.svg", width: 600, height: 400 },
];

const CampusDetail = () => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <div style={{ margin: "-8px" }}>
      <NavigationBar isOnLandingPage={false} />
      <Slideshow images={imagesArray} />
      <Footer />
    </div>
  );
};

export default CampusDetail;
