import styles from './styles.module.css'

const { header_component, header_container, header_link, header_text } = styles;

export default function Header() {
  return (
    <header className={header_component}>
      <div className={header_container}>
        <a className={header_link} href="#sobre">
          <h2 className={header_text}>
            Portfólio
          </h2>
        </a>
      </div>
    </header>
  )
}
