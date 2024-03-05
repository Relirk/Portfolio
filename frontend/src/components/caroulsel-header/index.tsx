
import CarouselProgressBar from '@/components/caroulsel-progress-bar';
import styles from './styles.module.css'

const { carousel_title, carousel_title_container, carousel_title_content } = styles;

export default function CarouselHeader(props: { title: string; scrollProgress: number; projectNumber: number }) {
  const { title, scrollProgress, projectNumber } = props;

  return (
    <div className={carousel_title_container}>
      <div className={carousel_title_content}>
        <h2 className={carousel_title}>
          {title}
        </h2>
        <h2 className={carousel_title}>
          {projectNumber} Projetos
        </h2>
      </div>

      <CarouselProgressBar scrollProgress={scrollProgress}/>
    </div>
  )
}