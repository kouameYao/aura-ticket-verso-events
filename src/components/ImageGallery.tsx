import React, { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageGalleryProps {
  images: string[];
  selectedImage: string;
  onClose: () => void;
  onSelect: (image: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  selectedImage,
  onClose,
  onSelect,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Find the index of the selected image
    const index = images.findIndex((img) => img === selectedImage);
    if (index !== -1) {
      setCurrentIndex(index);
    }

    // Add keyboard event listeners
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, images, onClose]);

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    onSelect(images[newIndex]);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    onSelect(images[newIndex]);
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
      <div className="absolute top-4 right-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="rounded-full bg-black/50 hover:bg-black/70 text-white"
        >
          <X className="h-6 w-6" />
        </Button>
      </div>

      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <Button
          variant="ghost"
          size="icon"
          onClick={handlePrev}
          className="rounded-full bg-black/50 hover:bg-black/70 text-white"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleNext}
          className="rounded-full bg-black/50 hover:bg-black/70 text-white"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      <div className="max-w-4xl max-h-[80vh] w-full">
        <img
          src={images[currentIndex]}
          alt="Full size view"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute bottom-6 left-0 right-0">
        <div className="flex justify-center gap-2 overflow-x-auto py-2 px-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`w-16 h-16 rounded-md overflow-hidden cursor-pointer border-2 transition-all ${
                currentIndex === index
                  ? "border-gold scale-110"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
              onClick={() => {
                setCurrentIndex(index);
                onSelect(image);
              }}
            >
              <img
                src={image}
                alt={`Thumbnail ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
