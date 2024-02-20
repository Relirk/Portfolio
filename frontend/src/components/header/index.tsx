import Link from 'next/link'
import styles from './styles.module.css'

const { 
  header_component,
  header_container,
  header_link,
  header_text,
  other_menus,
  other_link } = styles;

export default function Header() {
  return (
    <>
      <header className={header_component}>
        <div className={header_container}>
          <Link className={header_link} href="/">
            <h2 className={header_text}>
              Portfólio
            </h2>
          </Link>

          <div className={other_menus}>
            <Link className={other_link} href="/">Home</Link>
            <Link className={other_link} href="/projects">Projects</Link>
          </div>
        </div>
      </header>
    </>
  )
}
