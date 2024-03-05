'use client'
import { flushSync } from 'react-dom'
import { useEffect, useState, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel'
import Modal from '@/components/modal'
import CarouselItem from '@/components/carousel-item'
import CarouselHeader from '@/components/caroulsel-header'
import CarouselButtons from '@/components/carousel-buttons'
import CarouselProgressBar from '@/components/caroulsel-progress-bar';
import carouselItemStyles from '@/components/carousel-item/styles.module.css'
import styles from './styles.module.css'

const {
  embla,
  embla__container,
  display_visible,
  display_none} = styles;

const { embla__viewport } = carouselItemStyles;

export default function EmblaCarousel(props: { projects: any, title: string, backgroundImage: any, active: boolean }) {
  const { projects, title, active, backgroundImage } = props;

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
    <div className={embla.concat(active ? ` ${display_visible}` : ` ${display_none}`)}>
      <CarouselHeader
        title={title}
        scrollProgress={scrollProgress}
        projectNumber={projects.length}/>

      <div 
        className={embla__viewport}
        ref={emblaRef}>
          <div className={embla__container}>
            {projects.map((project: any, index: number) => (
              <CarouselItem
                key={project.id}
                index={index}
                project={project}
                inView={slidesInView.indexOf(index) > -1}/>
            ))}
          </div>
      </div>
      
      {projects.map((project: any, index: number) => (
        <Modal key={project.id} customId={`id-${project.id}`} project={project}/>
      ))}

      <CarouselButtons
        scrollPrev={scrollPrev}
        scrollNext={scrollNext}
        prevBtnDisabled={prevBtnDisabled}
        nextBtnDisabled={nextBtnDisabled}
      />
    </div>
  )
}