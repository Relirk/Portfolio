import carouselItemStyles from '@/components/carousel-item/styles.module.css'
import styles from './styles.module.css'

const { content_title, content_description, link_more_info } = styles;
const { carousel_content } = carouselItemStyles;

export default function CarouselItemDetail(props: { projectTitle: string; projectId: string; }) {
  const { projectTitle, projectId } = props;

  return (
    <div className={carousel_content}>
      <div>
        <h3 className={content_title}>{projectTitle}</h3>
        <p className={content_description}>28 de Setembro de 2024</p>
      </div>
      {/* <a href={`#id-${projectId}`} className={link_more_info}>Ver detalhes</a> */}
    </div>
  )
}