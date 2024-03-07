'use client'
import { useState } from 'react'

import GridButtons from '@/components/grid-buttons'
import GridItems from '@/components/grid-items'
import EmblaCarousel from '@/components/embla-carousel'
import projects from '../../../public/database.json'
import bgBackend from '../../../public/assets/carousel/background/webp/backend-background.webp'
import bgFrontend from '../../../public/assets/carousel/background/webp/frontend-background.webp'
import bgMobile from '../../../public/assets/carousel/background/webp/mobile-background.webp'
import bgGame from '../../../public/assets/carousel/background/webp/game-background.webp'
import styles from './styles.module.css'

const { projectsSection } = styles;

export default function ProjectsSection() {
  const [frontendVisible, setFrontendVisible] = useState(true);
  const [backendVisible, setBackendVisible] = useState(false);
  const [mobileVisible, setMobileVisible] = useState(false);
  const [gameVisible, setGameVisible] = useState(false);

  const changePresentation = (selected: string) => {
    switch(selected) {
      case 'frontend':
        setFrontendVisible(true);
        setBackendVisible(false);
        setMobileVisible(false);
        setGameVisible(false);
        break;
      case 'backend':
        setFrontendVisible(false);
        setBackendVisible(true);
        setMobileVisible(false);
        setGameVisible(false);
        break;
      case 'mobile':
        setFrontendVisible(false);
        setBackendVisible(false);
        setMobileVisible(true);
        setGameVisible(false);
        break;
      case 'game':
        setFrontendVisible(false);
        setBackendVisible(false);
        setMobileVisible(false);
        setGameVisible(true);
        break;
      default:
        setFrontendVisible(false);
        setBackendVisible(false);
        setMobileVisible(false);
        setGameVisible(false);
        break;
    }
  }

  return (
    <section id={projectsSection}>
      <GridButtons 
        selectionFunction={changePresentation}
        visibleStructure={{
          frontendVisible,
          backendVisible,
          mobileVisible,
          gameVisible
        }}/>

      {projects.frontendProjects.length > 0 && (
        <>
          {/* <EmblaCarousel
            title="Desenvolvimento - Front-End"
            projects={projects.frontendProjects}
            backgroundImage={bgFrontend}
            active={frontendVisible}/> */}

          <GridItems
            title="Desenvolvimento - Front-End"
            projects={projects.frontendProjects}
            active={frontendVisible}/>
        </>
      )}

      {projects.mobileProjects.length > 0 && (
        <>
          {/* <EmblaCarousel
            title="Desenvolvimento - Mobile"
            projects={projects.mobileProjects}
            backgroundImage={bgMobile}
            active={mobileVisible}/> */}

          <GridItems
            title="Desenvolvimento - Mobile"
            projects={projects.mobileProjects}
            active={mobileVisible}/>
        </>
      )}
      
      {projects.backendProjects.length > 0 && (
        <>
          {/* <EmblaCarousel
            title="Desenvolvimento - Back-End"
            projects={projects.backendProjects}
            backgroundImage={bgBackend}
            active={backendVisible}/> */}
          
          <GridItems
            title="Desenvolvimento - Back-End"
            projects={projects.backendProjects}
            active={backendVisible}/>
        </>
      )}
      
      {projects.gameProjects.length > 0 && (
        <>
          {/* <EmblaCarousel
            title="Desenvolvimento - Games"
            projects={projects.gameProjects}
            backgroundImage={bgGame}
            active={gameVisible}/> */}

          <GridItems
            title="Desenvolvimento - Games"
            projects={projects.gameProjects}
            active={gameVisible}/>
        </>
      )}
    </section>
  )
}