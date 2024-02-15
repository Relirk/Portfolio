import Image from 'next/image'
import React, { useState, useCallback } from 'react'
import type { ILazyLoadImagePropType } from './interfaces'
import ProjectDetails from './details'
import styles from './style.module.css'

const PLACEHOLDER_SRC = `data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D`

const { 
  embla__slide,
  embla__lazy_load,
  embla__lazy_load__has_loaded,
  embla__lazy_load__spinner,
  embla__slide__number,
  image_filter,
  image_filter_text,
  embla__slide__img,
  embla__lazy_load__img } = styles;

export function LazyLoadImageComponent(props: ILazyLoadImagePropType) {
  const { imgSrc, inView, projectTitle, index } = props
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
          src={inView ? imgSrc : PLACEHOLDER_SRC}
          alt="Project preview"
          data-src={imgSrc}
          width={500}
          height={500}
        />

        <div className={image_filter}>
          <p className={image_filter_text}>{projectTitle}</p>
        </div>

        <ProjectDetails projectTitle={projectTitle}/>
      </div>
    </div>
  )
}
