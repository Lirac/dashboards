import styles from './style'
import { Navbar, Billing, CardDeal, Testimonials, CTA, Footer, Business, Stats, Hero } from './components'

const App = () => (
  <div className="bg-primary w-full h-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats /> <Business /> <Billing /> <CardDeal /> <Testimonials /> <CTA /> <Footer />
      </div>
    </div>
  </div>
)

export default App
