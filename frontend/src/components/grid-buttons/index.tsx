import Image from 'next/image'
import { placeholderLoadingImage } from '@/constants'
import styles from './styles.module.css'
import frontendIcon from '../../../public/assets/svg/frontend.svg'
import backendIcon from '../../../public/assets/svg/backend.svg'
import mobileIcon from '../../../public/assets/svg/mobile.svg'
import gameIcon from '../../../public/assets/svg/game.svg'

const { grid, grid_content, grid_button, grid_image, grid_title, active, active_image } = styles;

export default function GridButtons(props: { selectionFunction: any, visibleStructure: any }) {
  const { selectionFunction, visibleStructure } = props;
  const { frontendVisible, backendVisible, mobileVisible, gameVisible } = visibleStructure;

  return (
    <div className={grid}>
      <div className={grid_content}>
        <button
          className={ frontendVisible ? active : grid_button }
          type="button"
          onClick={() => selectionFunction('frontend')}>
            <Image
              className={ frontendVisible ? active_image : grid_image }
              src={frontendIcon}
              alt="Frontend button"
              width={300}
              height={300}
              quality={80}
            />
        </button>
        <p className={grid_title}>Front-End</p>
      </div> 

      <div className={grid_content}>
        <button
          className={ backendVisible ? active : grid_button }
          type="button"
          onClick={() => selectionFunction('backend')}>
            <Image
              className={ backendVisible ? active_image : grid_image }
              src={backendIcon}
              alt="Backend button"
              width={300}
              height={300}
              quality={80}
            />
        </button>
        <p className={grid_title}>Back-End</p>
      </div> 

      <div className={grid_content}>
        <button
          className={ mobileVisible ? active : grid_button }
          type="button"
          onClick={() => selectionFunction('mobile')}>
            <Image
              className={ mobileVisible ? active_image : grid_image }
              src={mobileIcon}
              alt="Mobile button"
              width={300}
              height={300}
              quality={80}
            />
        </button>
        <p className={grid_title}>Mobile</p>
      </div>

      <div className={grid_content}>
        <button
          className={ gameVisible ? active : grid_button }
          type="button"
          onClick={() => selectionFunction('game')}>
            <Image
              className={ gameVisible ? active_image : grid_image }
              src={gameIcon}
              alt="Game button"
              width={300}
              height={300}
              quality={80}
            />
        </button>
        <p className={grid_title}>Games</p>
      </div> 
    </div>
  )
}