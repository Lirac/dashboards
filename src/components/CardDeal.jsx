import { card } from "../assets"
import styles, {layout} from '../style'
import Button from "./Button"

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Accept and process payments  <br className="sm:block hidden"/>from any bank or card.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Easily accept and process payments through our payment gateway.</p>
        <Button styles="mt-10"/>
      </div>
      
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  )
}

export default CardDeal