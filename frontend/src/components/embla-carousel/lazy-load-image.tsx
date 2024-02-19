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
          src={inView ? project.cover_image : PLACEHOLDER_SRC}
          alt="Project preview"
          width={300}
          height={300}
          quality={80}
          placeholder="blur"
          blurDataURL={PLACEHOLDER_SRC}
        />

        <div className={image_filter}>
          <p className={image_filter_text}>{project.title}</p>
        </div>

        <ProjectDetails projectTitle={project.title}/>
      </div>
    </div>
  )
}
