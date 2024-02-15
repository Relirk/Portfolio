import { getAllDocuments }  from '@/firebase/firestore/getData'
import EmblaCarousel from '@/components/embla-carousel'

export default async function ProjectsSection() {
  const frontendProjects = JSON.parse(JSON.stringify(await getAllDocuments('frontend-projects')));
  const mobileProjects = JSON.parse(JSON.stringify(await getAllDocuments('mobile-projects')));
  const backendProjects = JSON.parse(JSON.stringify(await getAllDocuments('backend-projects')));
  const gameProjects = JSON.parse(JSON.stringify(await getAllDocuments('game-projects')));
  

  return (
    <>
      <EmblaCarousel title="Desenvolvimento - Front-End" projects={frontendProjects}/>
      <EmblaCarousel title="Desenvolvimento - Mobile" projects={mobileProjects}/>
      <EmblaCarousel title="Desenvolvimento - Back-End" projects={backendProjects}/>
      <EmblaCarousel title="Desenvolvimento - Games" projects={gameProjects}/>
    </>
  )
}