import { getAllDocuments }  from '@/firebase/firestore/getData'
import EmblaCarousel from '@/components/embla-carousel'

export default async function ProjectsSection() {
  const frontendProjects = JSON.parse(JSON.stringify(await getAllDocuments('frontend-projects')));
  const mobileProjects = JSON.parse(JSON.stringify(await getAllDocuments('mobile-projects')));
  const backendProjects = JSON.parse(JSON.stringify(await getAllDocuments('backend-projects')));
  

  return (
    <>
      <EmblaCarousel title="Projetos Front-End" projects={frontendProjects}/>
      <EmblaCarousel title="Projetos Mobile" projects={mobileProjects}/>
      <EmblaCarousel title="Projetos Back-End" projects={backendProjects}/>
    </>
  )
}