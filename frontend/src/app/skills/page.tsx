import workerIcon from '../../../public/assets/svg/404-worker.svg'
import Image from 'next/image'
import { placeholderLoadingImage } from '@/constants'
export default async function Skills() {

  return (
    <div style={{display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "80%",}}>
      <Image
        className={``}
        src={workerIcon}
        alt="Project preview"
        width={400}
        height={400}
        loading="lazy"
        placeholder="blur"
        blurDataURL={placeholderLoadingImage}/>
    </div>
  );
}
