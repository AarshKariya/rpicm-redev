import GalleryItem from "./components/GalleryItem";
import styles from "./components/GalleryItem.module.scss";

const config = [
  {
    id: 1,
    imageUrl: "/gallery1.svg",
  },
];

const GallerySection = () => {
  return (
    <div className={styles.gallery}>
      {config.map((item) => (
        <GalleryItem key={item.id} imageUrl={item.imageUrl} />
      ))}
    </div>
  );
};

export default GallerySection;
