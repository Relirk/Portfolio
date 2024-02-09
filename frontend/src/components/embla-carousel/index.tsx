import React, { useEffect, useState, useCallback } from 'react'
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { DotButton, PrevButton, NextButton } from './arrowDotsButtons'
import { LazyLoadImage } from './lazyLoadImage'
import imageByIndex from './imagesByIndex';
import styles from './style.module.css'

export default function EmblaCarousel() {
  const slides = Array.from(Array(5).keys());
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'center', containScroll: false, loop: false });

  const [slidesInView, setSlidesInView] = useState<number[]>([])
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => {
    emblaApi && emblaApi.scrollPrev()
  },[emblaApi])

  const scrollNext = useCallback(() => {
    emblaApi && emblaApi.scrollNext()
  },[emblaApi])

  const scrollTo = useCallback((index: number) => {
    emblaApi && emblaApi.scrollTo(index)
  },[emblaApi])

  const onInit = useCallback((emblaApi: EmblaCarouselType) => { 
    setScrollSnaps(emblaApi.scrollSnapList()) 
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  const updateSlidesInView = useCallback((emblaApi: EmblaCarouselType) => {
    setSlidesInView((slidesInView) => {
      if (slidesInView.length === emblaApi.slideNodes().length) {
        emblaApi.off('slidesInView', updateSlidesInView)
      }
      const inView = emblaApi
        .slidesInView()
        .filter((index) => !slidesInView.includes(index))
      return slidesInView.concat(inView)
    })
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    updateSlidesInView(emblaApi)
    onInit(emblaApi)
    onSelect(emblaApi)
    
    emblaApi.on('reInit', updateSlidesInView)
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
    emblaApi.on('slidesInView', updateSlidesInView)
  }, [emblaApi, onInit, onSelect, updateSlidesInView])

  return (
    <>
      <div className={styles.embla}>
        <div className={styles.embla__viewport} ref={emblaRef}>
          <div className={styles.embla__container}>
            {slides.map((index) => (
              <div className={styles.embla__slide} key={index}>
                <div className={styles.embla__slide__number}>
                  <span>{index + 1}</span>
                </div>
                <LazyLoadImage
                  key={index}
                  index={index}
                  imgSrc={imageByIndex(index)}
                  inView={slidesInView.indexOf(index) > -1}/>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.embla__buttons}>
          <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
          <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
        </div>
      </div>
    
      <div className={styles.embla__dots}>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            className={styles.embla__dot.concat(index === selectedIndex ? ` ${styles.embla__dot__selected}` : '')}
          />
        ))}
      </div>
    </>
  )
}