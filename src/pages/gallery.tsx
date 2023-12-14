import Footer from "@/components/footer/FooterPage";
import GalleryPage from "@/components/gallerySection/components/GalleryPage/GalleryPage";
import NavigationBar from "@/components/navigationBar/NavigationBar";

const GalleryRoute = () => {
  return (
    <div style={{ overflowX: "hidden", margin: "-8px" }}>
      <NavigationBar isOnLandingPage={false} />
      <GalleryPage />
      <Footer />
    </div>
  );
};

export default GalleryRoute;
