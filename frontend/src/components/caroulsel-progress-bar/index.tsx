
import styles from './styles.module.css'

const { embla__progress, embla__progress__bar } = styles;

export default function CarouselHeader(props: { scrollProgress: number; }) {
  const { scrollProgress } = props;

  return (
    <div className={embla__progress}>
      <div
        className={embla__progress__bar}
        style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
      />
    </div>
  )
}