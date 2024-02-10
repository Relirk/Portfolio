'use client'
import React, { useEffect, useState, useCallback } from 'react'
import { flushSync } from 'react-dom'
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import { DotButton, PrevButton, NextButton } from './buttons'
import { LazyLoadImage } from './lazyLoadImage'
import imageByIndex from './images';
import styles from './style.module.css'

const TWEEN_FACTOR = 1.5
const {
  embla,
  embla__viewport,
  embla__container,
  embla__slide,
  embla__slide__number,
  embla__parallax,
  embla__parallax__layer,
  embla__buttons,
  embla__dots,
  embla__dot,
  embla__dot__selected,
  embla__progress,
  embla__progress__bar,
  carousel_title,
  carousel_title_container} = styles;

export default function EmblaCarousel() {
  const slides = Array.from(Array(12).keys());
  const OPTIONS: EmblaOptionsType = { containScroll: false, loop: false, dragFree: true }
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [ClassNames()])

  const [slidesInView, setSlidesInView] = useState<number[]>([])
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [tweenValues, setTweenValues] = useState<number[]>([])
  const [scrollProgress, setScrollProgress] = useState(0)

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

  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    if (!emblaApi) return

    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()))
    setScrollProgress(progress * 100)

    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target()
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target)
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress)
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress)
          }
        })
      }
      return diffToTarget * (-1 / TWEEN_FACTOR) * 100
    })
    setTweenValues(styles)
  }, [setTweenValues])

  useEffect(() => {
    if (!emblaApi) return

    onScroll(emblaApi)
    updateSlidesInView(emblaApi)
    onInit(emblaApi)
    onSelect(emblaApi)

    emblaApi.on('scroll', () => {
      flushSync(() => onScroll(emblaApi))
    })
    emblaApi.on('reInit', onScroll)
    emblaApi.on('reInit', updateSlidesInView)
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
    emblaApi.on('slidesInView', updateSlidesInView)
  }, [emblaApi, onInit, onScroll, onSelect, updateSlidesInView])

  return (
    <div className={embla}>
      <div className={carousel_title_container}>
        <h2 className={carousel_title}>Título da sessão</h2>
        <div className={embla__progress}>
          <div
            className={embla__progress__bar}
            style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
          />
        </div>
      </div>

      <div className={embla__viewport} ref={emblaRef}>
        <div className={embla__container}>
          {slides.map((index) => (
            <div className={embla__slide} key={index}>
              <div className={embla__slide__number}>
                <span>{index + 1}</span>
              </div>

              <div className={embla__parallax}>
                <div 
                  className={embla__parallax__layer}
                  style={{ ...(tweenValues.length && { transform: `translateX(${tweenValues[index]}%)` })}}>
                  <LazyLoadImage
                    key={index}
                    index={index}
                    imgSrc={imageByIndex(index)}
                    inView={slidesInView.indexOf(index) > -1}/>
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>

      <div className={embla__buttons}>
        <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
        <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
      </div>

      {/* <div className={embla__dots}>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            className={embla__dot.concat(index === selectedIndex ? ` ${embla__dot__selected}` : '')}
          />
        ))}
      </div> */}

    </div>
  )
}