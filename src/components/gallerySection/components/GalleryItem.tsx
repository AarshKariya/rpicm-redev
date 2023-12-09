import { motion } from "framer-motion";
import Image from "next/image";

interface GalleryItemProps {
  imageUrl: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ imageUrl }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} className="gallery-item">
      <div className="image-wrapper">
        <Image
          src={imageUrl}
          alt="Gallery Item"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </motion.div>
  );
};

export default GalleryItem;
