import { useState, useEffect, useRef } from "react";
import styles from './style.module.css';

export function Carousel(props: { activeIndex: any; setActiveIndex: any; children: any; }) {
  const {activeIndex, setActiveIndex, children} = props;
  
  const carouselRef = useRef(null);
  const [carouselTranslate, setCarouselTranslate] = useState(0);
  
  useEffect(() => {
    const { current } = carouselRef;
    if(current){
      const initialTranslateVal = current['offsetWidth'] / 4;
      const diffAmount = initialTranslateVal * 2;
      const translate = activeIndex === 0 ? initialTranslateVal : initialTranslateVal - (activeIndex * diffAmount)
      setCarouselTranslate(translate);
    }
    
  }, [activeIndex]);

  return (
    <>
      <div className={styles.carousel} ref={carouselRef} style={{transform: `translateX(${carouselTranslate}px)`}}>
        {children}
      </div>
      <div className={styles.dots}>
        {children.map((_child: any, i: React.Key | null | undefined) => 
          <button 
            key={i}
            className={`${styles.dot} ${activeIndex === i ? styles.active : ''}`}
            onClick={() => setActiveIndex(i)}/>
        )}
      </div>
    </>
  )
}