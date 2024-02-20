
import CarouselProgressBar from '@/components/caroulsel-progress-bar';
import styles from './styles.module.css'

const { carousel_title, carousel_title_container } = styles;

export default function CarouselHeader(props: { title: string; scrollProgress: number; }) {
  const { title, scrollProgress } = props;

  return (
    <div className={carousel_title_container}>
        <h2 className={carousel_title}>
          {title}
        </h2>

        <CarouselProgressBar scrollProgress={scrollProgress}/>
      </div>
  )
}