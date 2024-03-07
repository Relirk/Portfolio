import Link from 'next/link'
import Image from 'next/image'
import mailIcon from '../../../public/assets/svg/email-icon.svg'
import githubIcon from '../../../public/assets/svg/github-icon.svg'
import linkedinIcon from '../../../public/assets/svg/linkedin-icon.svg'
import whatsappIcon from '../../../public/assets/svg/whatsapp-icon.svg'
import styles from './styles.module.css'

const { 
  footer_component,
  footer_container,
  other_menus,
  other_link,
  icon,
  link_container,
  other_info
} = styles;

export default function Footer() {
  return (
    <>
      <footer className={footer_component}>
        <div className={footer_container}>
          <div className={other_menus}>
            <div className={link_container}>
              <Link href="mailto:olverajunior2014@gmail.com" target="_blank">
                <Image
                  className={icon}
                  src={mailIcon}
                  alt="Icon"
                  width={60}
                  height={60}
                />
              </Link>
              <Link className={other_link} href="mailto:olverajunior2014@gmail.com" target="_blank">E-mail</Link>
              <Link className={other_info} href="mailto:olverajunior2014@gmail.com" target="_blank">olverajunior2014@gmail.com</Link>
            </div>

            <div className={link_container}>
              <Link href="https://api.whatsapp.com/send?phone=5511952367384" target="_blank">
                <Image
                  className={icon}
                  src={whatsappIcon}
                  alt="Icon"
                  width={60}
                  height={60}
                />
              </Link>
              <Link className={other_link} href="https://api.whatsapp.com/send?phone=5511952367384" target="_blank">Whatsapp</Link>
              <Link className={other_info} href="https://api.whatsapp.com/send?phone=5511952367384" target="_blank">11 95236-7384</Link>
            </div>
            
            <div className={link_container}>
              <Link href="https://www.linkedin.com/in/francisco-olvera-relirk" target="_blank">
                <Image
                  className={icon}
                  src={linkedinIcon}
                  alt="Icon"
                  width={60}
                  height={60}
                />
              </Link>
              <Link className={other_link} href="https://www.linkedin.com/in/francisco-olvera-relirk" target="_blank">LinkedIn</Link>
              <Link className={other_info} href="https://www.linkedin.com/in/francisco-olvera-relirk" target="_blank">@folvera</Link>
            </div>

            <div className={link_container}>
              <Link href="https://github.com/Relirk" target="_blank">
                <Image
                  className={icon}
                  src={githubIcon}
                  alt="Icon"
                  width={60}
                  height={60}
                />
              </Link>
              <Link className={other_link} href="https://github.com/Relirk" target="_blank">Github</Link>
              <Link className={other_info} href="https://github.com/Relirk" target="_blank">@relirk</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
