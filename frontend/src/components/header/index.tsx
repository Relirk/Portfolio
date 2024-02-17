import Modal from '@/components/modal'
import styles from './styles.module.css'

const { header_component, header_container, header_link, header_text } = styles;

export default function Header() {
  return (
    <>
      <Modal/>
      <header className={header_component}>
        <div className={header_container}>
          <a className="cta" href="#google">css modal</a>
          <a className={header_link} href="#projectsSection">
            <h2 className={header_text}>
              Portfólio
            </h2>
          </a>
        </div>
      </header>
    </>
  )
}
