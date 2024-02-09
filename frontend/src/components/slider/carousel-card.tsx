import styles from './style.module.css';

export function CarouselCard(props: { active: any; children: any; }){
  const {active, children} = props;

  return (
    <div className={`${styles.carousel_card} ${active ? styles.active : ''}`}>
      {children}
    </div>
  )
}