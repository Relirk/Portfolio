import EmblaCarousel from '@/components/embla-carousel'
import styles from './styles.module.css'
import projects from '../../../public/database.json'
import bgBackend from '../../../public/assets/carousel/background/backend-background.jpg'
import bgFrontend from '../../../public/assets/carousel/background/frontend-background.jpg'
import bgMobile from '../../../public/assets/carousel/background/mobile-background.jpg'
import bgGame from '../../../public/assets/carousel/background/game-background.jpg'

const { projectsSection } = styles;

export default async function ProjectsSection() {
  
  return (
    <section id={projectsSection}>
      {projects.frontendProjects.length > 0 && (
        <EmblaCarousel
          title="Desenvolvimento - Front-End"
          projects={projects.frontendProjects}
          backgroundImage={bgFrontend}/>
      )}

      {projects.mobileProjects.length > 0 && (
        <EmblaCarousel
          title="Desenvolvimento - Mobile"
          projects={projects.mobileProjects}
          backgroundImage={bgMobile}/>
      )}
      
      {projects.backendProjects.length > 0 && (
        <EmblaCarousel
          title="Desenvolvimento - Back-End"
          projects={projects.backendProjects}
          backgroundImage={bgBackend}/>
      )}
      
      {projects.gameProjects.length > 0 && (
        <EmblaCarousel
          title="Desenvolvimento - Games"
          projects={projects.gameProjects}
          backgroundImage={bgGame}/>
      )}
    </section>
  )
}