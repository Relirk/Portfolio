import React, { useState, useCallback } from 'react'
import styles from './style.module.css'

const PLACEHOLDER_SRC = `data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D`

type PropType = {
  imgSrc: string
  inView: boolean
  index: number
}

export const LazyLoadImage: React.FC<PropType> = (props) => {
  const { imgSrc, inView, index } = props
  const [hasLoaded, setHasLoaded] = useState(false)

  const setLoaded = useCallback(() => {
    if (inView) setHasLoaded(true)
  }, [inView, setHasLoaded])

  return (
    <div className={styles.embla__slide}>
      <div
        className={styles.embla__lazy_load.concat(hasLoaded ? ` ${styles.embla__lazy_load__has_loaded}` : '')}
      >
        {!hasLoaded && <span className={styles.embla__lazy_load__spinner} />}
        <div className={styles.embla__slide__number}>
          <span>{index + 1}</span>
        </div>
        <img
          className={`${styles.embla__slide__img} ${styles.embla__lazy_load__img}`}
          onLoad={setLoaded}
          src={inView ? imgSrc : PLACEHOLDER_SRC}
          alt="Your alt text"
          data-src={imgSrc}
        />
      </div>
    </div>
  )
}
