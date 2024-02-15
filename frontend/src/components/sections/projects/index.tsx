import { getAllDocuments }  from '@/firebase/firestore/getData'
import EmblaCarousel from '@/components/embla-carousel'
import transformProjectsResponse from '@/util/transform';

export default async function ProjectsSection() {

  const firestoreProjects = await getAllDocuments('projects')
  const projects = transformProjectsResponse(firestoreProjects.result);
  const {frontendProjects, backendProjects, mobileProjects, gameProjects} = projects;
  console.log(frontendProjects.length)

  return (
    <>
      {frontendProjects.length > 0 && (
        <EmblaCarousel title="Desenvolvimento - Front-End" projects={frontendProjects}/>
      )}

      {mobileProjects.length > 0 && (
        <EmblaCarousel title="Desenvolvimento - Mobile" projects={mobileProjects}/>
      )}
      
      {backendProjects.length > 0 && (
        <EmblaCarousel title="Desenvolvimento - Back-End" projects={backendProjects}/>
      )}
      
      {gameProjects.length > 0 && (
        <EmblaCarousel title="Desenvolvimento - Games" projects={gameProjects}/>
      )}
    </>
  )
}