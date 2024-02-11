import styles from './style.module.css'

const {carousel_content, content_title, link_more_info} = styles;

export default function ProjectDetails() {
  return (
    <div className={carousel_content}>
      <h3 className={content_title}>28 de Setembro de 2024</h3>
      <a className={link_more_info}>Ver detalhes</a>
    </div>
  )
}