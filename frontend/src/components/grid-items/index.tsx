import Image from 'next/image'
import { placeholderLoadingImage } from '@/constants'
import Modal from '@/components/modal'
import ItemDetail from '@/components/item-detail'
import styles from './styles.module.css'

const { 
  items,
  item,
  image,
  lazy_load_image,
  image_filter,
  image_filter_text,
  display_visible,
  display_none,
  display_visible_text,
  title_content,
  title_text } = styles;

export default function GridItems(props: { projects: any, active: boolean, title: string }) {
  const { projects, active, title } = props;
 
  return (
    <>
      <div className={title_content.concat(active ? ` ${display_visible_text}` : ` ${display_none}`)}>
        <h2 className={title_text}>
          {title}
        </h2>
        <h2 className={title_text}>
          {projects.length} Projetos
        </h2>
      </div>
  
      <div className={items.concat(active ? ` ${display_visible}` : ` ${display_none}`)}>
        {projects.map((project: any, index: number) => (
          <div key={project.id} className={item}>
            <Image
              className={`${image} ${lazy_load_image}`}
              src={project.cover_image}
              alt="Project preview"
              width={300}
              height={300}
              loading="lazy"
              placeholder="blur"
              blurDataURL={placeholderLoadingImage}/>

            <a href={`#id-${project.id}`}>
              <div className={image_filter} >
                <p className={image_filter_text}>{project.title}</p>
              </div>
            </a>

            <ItemDetail projectTitle={project.title} projectId={project.id}/>
          </div>
        ))}

        {projects.map((project: any, index: number) => (
          <Modal key={project.id} customId={`id-${project.id}`} project={project}/>
        ))}
      </div>
    </>
  )
}