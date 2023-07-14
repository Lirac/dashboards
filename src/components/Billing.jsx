import {  bill } from '../assets'
import styles, { layout } from '../style'

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
      </div>
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily monitor your <br className="sm:block hidden" />
          expenses and invoice.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Monitor all your business expenses and track your invoices. Create reports that track your expenses over any time period.
        </p>
      </div>
    </section>
  )
}

export default Billing
