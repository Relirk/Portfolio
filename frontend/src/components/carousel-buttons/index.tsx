import { PrevButton, NextButton } from './partials'
import styles from './styles.module.css'

const { embla__buttons } = styles;

export default function CarouselButtons(props: { 
  scrollPrev: any;
  scrollNext: any;
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
}) {
  const { scrollPrev, scrollNext, prevBtnDisabled, nextBtnDisabled } = props;

  return (
    <div className={embla__buttons}>
      <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
      <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
    </div>
  )
}