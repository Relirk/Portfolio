import Image from 'next/image'
import { placeholderLoadingImage } from '@/constants'
import styles from './styles.module.css'
import frontendIcon from '../../../public/assets/svg/frontend.svg'
import backendIcon from '../../../public/assets/svg/backend.svg'
import mobileIcon from '../../../public/assets/svg/mobile.svg'
import gameIcon from '../../../public/assets/svg/game.svg'

const { grid, grid_content, grid_button, grid_image } = styles;

export default function GridButtons(props: { selectionFunction: any }) {
  const { selectionFunction } = props;

  return (
    <div className={grid}>
      <div className={grid_content}>
        <button
          className={grid_button}
          type="button"
          onClick={() => selectionFunction('frontend')}>
            <Image
              className={grid_image}
              src={frontendIcon}
              alt="Frontend button"
              width={300}
              height={300}
              quality={80}
            />
        </button>
      </div> 

      <div className={grid_content}>
        <button
          className={grid_button}
          type="button"
          onClick={() => selectionFunction('backend')}>
            <Image
              className={grid_image}
              src={backendIcon}
              alt="Backend button"
              width={300}
              height={300}
              quality={80}
            />
        </button>
      </div> 

      <div className={grid_content}>
        <button
          className={grid_button}
          type="button"
          onClick={() => selectionFunction('mobile')}>
            <Image
              className={grid_image}
              src={mobileIcon}
              alt="Mobile button"
              width={300}
              height={300}
              quality={80}
            />
        </button>
      </div>

      <div className={grid_content}>
        <button
          className={grid_button}
          type="button"
          onClick={() => selectionFunction('game')}>
            <Image
              className={grid_image}
              src={gameIcon}
              alt="Game button"
              width={300}
              height={300}
              quality={80}
            />
        </button>
      </div> 
    </div>
  )
}