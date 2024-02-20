import Image from 'next/image'
import { placeholderLoadingImage } from '@/constants'
import styles from './styles.module.css'

const { modal_overlay, modal, close} = styles;

export default function Modal(props: { customId: string; project: any; }) {
  const { customId, project } = props;

  return (
    <div id={customId} className={modal_overlay}>
      <div className={modal}>
        <a href="#close" className={close}>&times;</a>
        <div>
          <h1>{project.title}</h1>
          <Image
          className=''
          src={project.cover_image}
          alt="Project modal preview"
          width={300}
          height={300}
          quality={80}
          placeholder="blur"
          blurDataURL={placeholderLoadingImage}
        />
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  )
}