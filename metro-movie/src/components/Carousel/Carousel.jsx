import React, { useState } from "react";
import styles from "./Carousel.module.css";

export default function Carousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }
    setActiveIndex(newIndex);
  };
  return (
    <div className={styles.carousel}>
      <div
        className={styles.inner}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className={styles.pointer_container}>
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={styles.pointer}
              onClick={() => {
                updateIndex(index);
              }}
            >
              .
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function CarouselItem({ children, width }) {
  return (
    <div className={styles.carousel_item} style={{ width: { width } }}>
      {children}
    </div>
  );
}
