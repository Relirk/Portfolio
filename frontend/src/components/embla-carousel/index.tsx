'use client'
import React, { useEffect, useState, useCallback } from 'react'
import { flushSync } from 'react-dom'
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import { PrevButton, NextButton } from './next-prev-buttons'
import { LazyLoadImageComponent } from './lazy-load-image'
import styles from './style.module.css'

const {
  embla,
  embla__viewport,
  embla__container,
  embla__buttons,
  embla__progress,
  embla__progress__bar,
  carousel_title,
  carousel_title_container} = styles;

export default function EmblaCarousel(props: { projects: any, title: string }) {
  const { projects, title } = props;

  const slides = Array.from(Array(projects.length).keys());
  const OPTIONS: EmblaOptionsType = { align: 'start', containScroll: false, loop: false, dragFree: true }
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [ClassNames()])

  const [slidesInView, setSlidesInView] = useState<number[]>([])
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)

  const scrollPrev = useCallback(() => {
    emblaApi && emblaApi.scrollPrev()
  },[emblaApi])

  const scrollNext = useCallback(() => {
    emblaApi && emblaApi.scrollNext()
  },[emblaApi])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
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
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onScroll(emblaApi)
    updateSlidesInView(emblaApi)
    onSelect(emblaApi)

    emblaApi.on('scroll', () => {
      flushSync(() => onScroll(emblaApi))
    })
    emblaApi.on('reInit', onScroll)
    emblaApi.on('reInit', updateSlidesInView)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
    emblaApi.on('slidesInView', updateSlidesInView)
  }, [emblaApi, onScroll, onSelect, updateSlidesInView])

  return (
    <div className={embla}>
      {/* Carousel Header */}
      <div className={carousel_title_container}>
        <h2 className={carousel_title}>
          {title}
        </h2>

        <div className={embla__progress}>
          <div
            className={embla__progress__bar}
            style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
          />
        </div>
      </div>

      {/* Carousel */}
      <div className={embla__viewport} ref={emblaRef}>
        <div className={embla__container}>
          {projects.map((project: any, index: number) => (
            <LazyLoadImageComponent
              key={project.id}
              index={index}
              project={project}
              inView={slidesInView.indexOf(index) > -1}/>
          ))}
        </div>
      </div>

      {/* Carousel Navigation Buttons */}
      <div className={embla__buttons}>
        <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
        <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
      </div>
    </div>
  )
}