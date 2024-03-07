import gridStyles from '@/components/grid-items/styles.module.css'
import styles from './styles.module.css'

const { content_title, content_description, link_more_info } = styles;
const { content } = gridStyles;

export default function ItemDetail(props: { projectTitle: string; projectId: string; }) {
  const { projectTitle, projectId } = props;

  return (
    <div className={content}>
      <div>
        <h3 className={content_title}>{projectTitle}</h3>
        <p className={content_description}></p>
      </div>
      <a href={`#id-${projectId}`} className={link_more_info}>Ver detalhes</a>
    </div>
  )
}