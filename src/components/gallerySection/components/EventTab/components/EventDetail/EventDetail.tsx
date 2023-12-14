import Footer from "@/components/footer/FooterPage";
import NavigationBar from "@/components/navigationBar/NavigationBar";
import { useRouter } from "next/router";
import Slideshow from "../../../CampusTab/components/ImageSlideshow/Slideshow";

const imagesArray = [
  { id: 1, src: "/aboutUs1.svg", width: 600, height: 400 },
  { id: 2, src: "/aboutUs2.svg", width: 600, height: 400 },
  { id: 3, src: "/aboutUs3.svg", width: 600, height: 400 },
];

const EventDetail = () => {
  const router = useRouter();
  const { name } = router.query;
  console.log("name", name);

  return (
    <div style={{ margin: "-8px" }}>
      <NavigationBar isOnLandingPage={false} />
      <Slideshow images={imagesArray} />
      <Footer />
    </div>
  );
};

export default EventDetail;
