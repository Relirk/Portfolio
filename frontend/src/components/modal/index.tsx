import Image from 'next/image'
import { placeholderLoadingImage } from '@/constants'
import styles from './styles.module.css'

const {
  modal_overlay,
  modal,
  close,
  project_image,
  project_info,
  project_data_1,
  description } = styles;

export default function Modal(props: { customId: string; project: any; }) {
  const { customId, project } = props;

  return (
    <div id={customId} className={modal_overlay}>
      <div className={modal}>
        <a href="#close" className={close}>&times;</a>
          <h1>{project.title}</h1>

          <div className={project_info}>
            <div>
              <Image
                className={project_image}
                src={project.cover_image}
                alt="Project modal preview"
                width={300}
                height={300}
                quality={80}
                placeholder="blur"
                blurDataURL={placeholderLoadingImage} />
            </div>

            <div className={project_data_1} dangerouslySetInnerHTML={ { __html: project.description } }>
            </div>
          </div>
      </div>
    </div>
  )
}