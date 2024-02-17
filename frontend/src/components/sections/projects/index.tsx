import { getAllDocuments }  from '@/firebase/firestore/getData'
import EmblaCarousel from '@/components/embla-carousel'
import transformProjectsResponse from '@/util/transform';
import { useEffect, useState } from 'react';
import { promises as fs } from 'fs';
import projects from '../../../../public/database.json';

export default async function ProjectsSection() {
  
  return (
    <>
      {projects.frontendProjects.length > 0 && (
        <EmblaCarousel title="Desenvolvimento - Front-End" projects={projects.frontendProjects}/>
      )}

      {projects.mobileProjects.length > 0 && (
        <EmblaCarousel title="Desenvolvimento - Mobile" projects={projects.mobileProjects}/>
      )}
      
      {projects.backendProjects.length > 0 && (
        <EmblaCarousel title="Desenvolvimento - Back-End" projects={projects.backendProjects}/>
      )}
      
      {projects.gameProjects.length > 0 && (
        <EmblaCarousel title="Desenvolvimento - Games" projects={projects.gameProjects}/>
      )}
    </>
  )
}