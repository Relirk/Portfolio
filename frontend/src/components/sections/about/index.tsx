import Image from 'next/image'
import profilePic from '@/assets/profile.svg'
import { staticUrlImages, staticUrlDocuments } from '@/constants'
import styles from './styles.module.css'

const { 
  sobre,
  container,
  filter,
  banner,
  intro,
  title,
  title_text,
  my_name,
  job,
  actions,
  action_link,
  about,
  about_card,
  about_title,
  about_description,
  profile,
  profile_img } = styles;

const { aboutBackgroundImage } = staticUrlImages;
const { cv, email} = staticUrlDocuments;

export default async function AboutSection() {

  return(
    <section id={sobre}>
      <div className={container} style={{ backgroundImage: `url(${aboutBackgroundImage})` }}>
        <div className={filter}>
          <div className={banner}>
            <div className={intro}>
              
              <div className={title}>
                <h1 className={title_text}>Olá, eu sou o </h1> 
                <span className={my_name}>Francisco Olvera teste</span>
                <p className={job}>Desenvolvedor multiplataforma</p>
              </div>

              <div className={actions}>
                <a className={action_link} href={cv} download target="_blank">Download CV</a>
                <a className={action_link} href={email} target="_blank">Entrar em contato</a>
              </div>
            </div>
              
            <div className={profile}>
              {/* <Image className={profile_img} src={profilePic} alt="avatar"/> */}
            </div>
          </div>

          <div className={about}>
            <div className={about_card}>
              <h2 className={about_title}>Sobre mim</h2>
              <p className={about_description}> 28 anos, Bacharelado em Ciência da Computação e pós graduado em desenvolvimento Mobile. 
                Trabalho com desenvolvimento de software desde 2013 e tenho como principal paixão o estudo e desenvolvimento de jogos.
                Atualmente atuando como Desenvolvedor Full Stack, onde lido com aplicações Web, Webview em ReacJS e desenvolvimento nativo com Android e iOS. 
              </p>
            </div>
          </div>
        </div>
      </div>
  </section>
  )
}