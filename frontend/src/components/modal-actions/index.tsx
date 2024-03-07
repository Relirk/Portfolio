import { useEffect, useState } from 'react';
import Image from 'next/image'
import formatDate from '@/util/date'
import { placeholderLoadingImage } from '@/constants'
import styles from './styles.module.css'

const {
  button_grid,
  link_base } = styles;

export default function ModalActions(props: { project: any; }) {
  const { project } = props;

  return (
    <div className={button_grid}>
      {project.github_url && (
        <a href={project.github_url} className={link_base} target="_blank">Github</a>
      )}

      {project.cdn_url && (
        <a href={project.cdn_url} className={link_base} target="_blank">Veja Online</a>
      )}
      
      {project.google_play_url && (
        <a href={project.google_play_url} className={link_base} target="_blank">Play Store</a>
      )}

      {project.apple_store_url && (
        <a href={project.apple_store_url} className={link_base} target="_blank">Apple Store</a>
      )}
    </div>
  )
}