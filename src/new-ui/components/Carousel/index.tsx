import React, { Activity, useState } from "react";

import styles from "./style.module.css";
import Button from "../Button";

interface CarouselProps {
  items: React.ReactNode[];
  extra?: React.ReactNode;
}

export default function Carousel({ items, extra }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };
  return (
    <div className={styles.carouselContainer}>
      {items.map((item, itemIndex) => (
        <Activity
          key={`carousel-item-${itemIndex}`}
          mode={currentIndex === itemIndex ? "visible" : "hidden"}
        >
          <div className={styles.carouselItem}>{item}</div>
        </Activity>
      ))}
      <div className={styles.carouselFooter}>
        {extra && <div className={styles.carouselExtraContainer}>{extra}</div>}
        {items.length > 1 && (
          <div className={styles.carouselActionContainer}>
            <Button
              onClick={handlePrevious}
              className={styles.carouselPreviousButton}
            >
              {`<`}
            </Button>
            <span>
              {currentIndex + 1} / {items.length}
            </span>
            <Button onClick={handleNext} className={styles.carouselNextButton}>
              {`>`}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
