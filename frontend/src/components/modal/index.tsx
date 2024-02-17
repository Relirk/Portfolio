import styles from './styles.module.css'

const { modal_overlay, modal, close} = styles;

export default function Modal() {

  return (
    <div id="google" className={modal_overlay}>
      <div className={modal}>
        <a href="#close" className={close}>&times;</a>
        <div>
          <h1>Here is some content inside the Modal.</h1>
          <p>If the modal shrinks below the breakpoint then the modal goes full screen for mobile use.</p>
        </div>
      </div>
    </div>
  )
}