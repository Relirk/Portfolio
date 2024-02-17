import React, { FC } from 'react'
import type { IButtonsPropType } from './interfaces'
import styles from './style.module.css'

export const PrevButton: FC<IButtonsPropType> = (props) => {
  const { children, ...restProps } = props

  return (
    <button
      className={`${styles.embla__button} ${styles.embla__button__prev}`}
      type="button"
      {...restProps}
    >
      <svg className={styles.embla__button__svg} width="50" height="50" viewBox="0 0 182 104" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="79" width="26" height="104" fill="currentColor"/>
        <rect x="79" width="26" height="104" fill="currentColor"/>
        <rect x="79" width="26" height="104" fill="currentColor"/>
        <rect x="182" y="39" width="27" height="182" transform="rotate(90 182 39)" fill="currentColor"/>
        <rect x="182" y="39" width="27" height="182" transform="rotate(90 182 39)" fill="currentColor"/>
        <rect x="182" y="39" width="27" height="182" transform="rotate(90 182 39)" fill="currentColor"/>
        <rect x="53" y="13" width="26" height="78" fill="currentColor"/>
        <rect x="53" y="13" width="26" height="78" fill="currentColor"/>
        <rect x="53" y="13" width="26" height="78" fill="currentColor"/>
        <rect x="27" y="26" width="26" height="52" fill="currentColor"/>
        <rect x="27" y="26" width="26" height="52" fill="currentColor"/>
        <rect x="27" y="26" width="26" height="52" fill="currentColor"/>
      </svg>

      {children}
    </button>
  )
}

export const NextButton: FC<IButtonsPropType> = (props) => {
  const { children, ...restProps } = props

  return (
    <button
      className={`${styles.embla__button} ${styles.embla__button__next}`}
      type="button"
      {...restProps}
    >

      <svg className={styles.embla__button__svg} width="182" height="104" viewBox="0 0 182 104" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="103" y="103.997" width="26" height="104" transform="rotate(180 103 103.997)" fill="currentColor"/>
        <rect x="103" y="103.997" width="26" height="104" transform="rotate(180 103 103.997)" fill="currentColor"/>
        <rect x="103" y="103.997" width="26" height="104" transform="rotate(180 103 103.997)" fill="currentColor"/>
        <rect x="0.000244141" y="64.9971" width="27" height="182" transform="rotate(-90 0.000244141 64.9971)" fill="currentColor"/>
        <rect x="0.000244141" y="64.9971" width="27" height="182" transform="rotate(-90 0.000244141 64.9971)" fill="currentColor"/>
        <rect x="0.000244141" y="64.9971" width="27" height="182" transform="rotate(-90 0.000244141 64.9971)" fill="currentColor"/>
        <rect x="129" y="90.9971" width="26" height="78" transform="rotate(180 129 90.9971)" fill="currentColor"/>
        <rect x="129" y="90.9971" width="26" height="78" transform="rotate(180 129 90.9971)" fill="currentColor"/>
        <rect x="129" y="90.9971" width="26" height="78" transform="rotate(180 129 90.9971)" fill="currentColor"/>
        <rect x="155" y="77.9971" width="26" height="52" transform="rotate(180 155 77.9971)" fill="currentColor"/>
        <rect x="155" y="77.9971" width="26" height="52" transform="rotate(180 155 77.9971)" fill="currentColor"/>
        <rect x="155" y="77.9971" width="26" height="52" transform="rotate(180 155 77.9971)" fill="currentColor"/>
      </svg>
      {children}
    </button>
  )
}
