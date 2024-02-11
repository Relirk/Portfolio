import Image from 'next/image'
import React, { FC, useState, useCallback } from 'react'
import type { ILazyLoadImagePropType } from './interfaces'
import ProjectDetails from './details'
import styles from './style.module.css'

const PLACEHOLDER_SRC = `data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D`

export const LazyLoadImage: FC<ILazyLoadImagePropType> = (props) => {
  const { imgSrc, inView, index } = props
  const [hasLoaded, setHasLoaded] = useState(false)

  const setLoaded = useCallback(() => {
    if (inView) setHasLoaded(true)
  }, [inView, setHasLoaded])

  return (
    <div className={styles.embla__slide}>
      <div className={styles.embla__lazy_load.concat(hasLoaded ? ` ${styles.embla__lazy_load__has_loaded}` : '')}>
        {!hasLoaded && (
          <span className={styles.embla__lazy_load__spinner} />)
        }

        <div className={styles.embla__slide__number}>
          <span>{index + 1}</span>
        </div>

        <Image
          className={`${styles.embla__slide__img} ${styles.embla__lazy_load__img} ${styles.embla__parallax__img}`}
          onLoad={setLoaded}
          src={inView ? imgSrc : PLACEHOLDER_SRC}
          alt="Project preview"
          data-src={imgSrc}
          width={500}
          height={500}
        />

        <ProjectDetails/>
      </div>
    </div>
  )
}
