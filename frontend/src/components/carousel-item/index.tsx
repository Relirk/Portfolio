import Image from 'next/image'
import { useState, useCallback } from 'react'
import { placeholderLoadingImage } from '@/constants'
import CarouselItemDetail from '@/components/carousel-item-detail'
import type { ICarouselItemPropType } from './types/interfaces'
import styles from './styles.module.css'

const { 
  embla__slide,
  embla__slide__img,
  embla__slide__number,
  embla__lazy_load,
  embla__lazy_load__has_loaded,
  embla__lazy_load__spinner,
  embla__lazy_load__img,
  image_filter,
  image_filter_text } = styles;

export default function CarouselItem(props: ICarouselItemPropType) {
  const { project, inView, index } = props
  const [hasLoaded, setHasLoaded] = useState(false)

  const setLoaded = useCallback(() => {
    if (inView) setHasLoaded(true)
  }, [inView, setHasLoaded])

  return (
    <div className={embla__slide}>
      <div className={embla__lazy_load.concat(hasLoaded ? ` ${embla__lazy_load__has_loaded}` : '')}>
        {!hasLoaded && (
          <span className={embla__lazy_load__spinner} />)
        }

        <div className={embla__slide__number}>
          <span>{index + 1}</span>
        </div>

        <Image
          className={`${embla__slide__img} ${embla__lazy_load__img}`}
          onLoad={setLoaded}
          src={inView ? project.cover_image : placeholderLoadingImage}
          alt="Project preview"
          width={300}
          height={300}
          quality={80}
          placeholder="blur"
          blurDataURL={placeholderLoadingImage}
        />

        <div className={image_filter}>
          <p className={image_filter_text}>{project.title}</p>
        </div>

        <CarouselItemDetail projectTitle={project.title} projectId={project.id}/>
      </div>
    </div>
  )
}
