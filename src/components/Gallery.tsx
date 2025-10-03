"use client";
import { iconLibrary } from "@/assets/icons";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
interface GalleryProps {
  images: string[];
}
const Gallery = ({ images }: GalleryProps) => {
  const popAnimation = { y: [0, 100, 0], scaleY: [1, 0.3, 1] };
  const dropAnimation = { y: [-200, 0], scale: [0.3, 1] };
  const [currImage, setCurrImage] = useState<string | null>(null);

  const [display, setDisplay] = useState<string[]>(images);

  const listControls = useAnimationControls();
  const displayControls = useAnimationControls();
  const getNextImage = useCallback(() => {
    // Check if there are any remaining images
    if (display.length === 0) {
      const [firstImage, ...restOfImages] = images;
      setCurrImage(firstImage);
      setDisplay(restOfImages);
      return;
    }
    // Get the next image and update the list
    const [nextImage, ...restOfImages] = display;
    setCurrImage(nextImage);
    setDisplay(restOfImages);
  }, [images, display]);

  useEffect(() => {
    // Start the slideshow after a brief delay, to show the first image
    const interval = setInterval(() => {
      listControls.start(popAnimation);
      setTimeout(() => {
        displayControls.start(dropAnimation);
        getNextImage();
      }, 400);
    }, 3000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [getNextImage, popAnimation]);

  return (
    <div className="w-full flex flex-col shadow-md shadow-black/50 p-2 sm:p-4 relative">
      <h2 className="text-3xl flex items-end">
        {React.createElement(iconLibrary["gallery"], {
          className: "text-5xl",
        })}
        Gallery
      </h2>
      <div className="flex gap-5 w-full items-end">
        <div className="w-96 h-72 rounded-3xl backdrop-blur-lg border">
          <motion.div
            className="w-full h-full flex"
            style={{
              borderRadius: "inherit",
            }}
            animate={displayControls}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {currImage ? (
              <Image
                src={currImage}
                alt={currImage}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            ) : (
              <div
                className="w-full h-full bg-surface-300/20"
                style={{ borderRadius: "inherit" }}
              >
                {React.createElement(iconLibrary["gallery"], {
                  className: "w-1/2 h-full place-self-center opacity-50",
                })}
              </div>
            )}
          </motion.div>
        </div>
        <ul className="w-3/4 overflow-hidden flex gap-2.5">
          {display.map((image, index) => (
            <AnimatePresence key={index}>
              <motion.li
                className="w-32 h-44 rounded-3xl origin-bottom"
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: (index / display.length) * 1,
                }}
                animate={listControls}
              >
                {/* {animatedIndex + "|" + index} */}
                <Image
                  src={image}
                  alt={image}
                  width={500}
                  height={500}
                  className="w-full h-full shrink-0"
                />
              </motion.li>
            </AnimatePresence>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Gallery;
