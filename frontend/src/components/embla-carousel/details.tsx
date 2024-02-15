import styles from './style.module.css'

const {carousel_content, content_title, content_description, link_more_info} = styles;

export default function ProjectDetails(props: { projectTitle: string; }) {
  const { projectTitle } = props;

  return (
    <div className={carousel_content}>
      <div>
        <h3 className={content_title}>{projectTitle}</h3>
        <p className={content_description}>28 de Setembro de 2024</p>
      </div>
      <a className={link_more_info}>Ver detalhes</a>
    </div>
  )
}