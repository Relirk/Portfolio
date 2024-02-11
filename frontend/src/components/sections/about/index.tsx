import Image from 'next/image'
import profilePic from '@/assets/profile.svg'
import styles from './styles.module.css'

const {sobre,
  container,
  banner,
  intro,
  title,
  title_text,
  my_name,
  job,
  actions,
  action_link,
  about,
  about_title,
  about_description,
  profile,
  profile_img } = styles;

export default function AboutSection() {
  return(
    <section id={sobre}>
      <div className={container}>
        <div className={banner}>
          <div className={intro}>
            
            <div className={title}>
              <h1 className={title_text}>Olá, eu sou o </h1> 
              <span className={my_name}>Francisco Olvera</span>
              <p className={job}>Desenvolvedor multiplataforma</p>
            </div>

            <div className={actions}>
              <a className={action_link} href="assets/cv/cv-folvera.pdf" download>Download CV</a>
              <a className={action_link} href="mailto:olverajunior2014@gmail.com" target="_blank">Entrar em contato</a>
            </div>
          </div>
            
          <div className={profile}>
            <Image className={profile_img} src={profilePic} alt="avatar"/>
          </div>
        </div>

        <div className={about}>
          <h2 className={about_title}>Sobre mim</h2>
          <p className={about_description}> 22 anos, Bacharelado em Sistemas de Informação e Técnico em Software. 
              Cursando uma formação de Desenvolvimento Full-Stack com especialização em Front-End na Digital House Brasil, através de uma bolsa de estudos. 
              Atuando como Desenvolvedor Front-end, onde lido com aplicações Web em React.js. 
          </p>
        </div>
      </div>
  </section>
  )
}