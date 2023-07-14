import { robot } from '../assets'
import { GetStarted } from '../components'
import styles from '../style'

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[70px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            Make Business
            <br className="sm:block hidden" /> <span className="text-gradient">Decisions</span> <br />
            <h1 className="flex-1 font-poppins font-semibold ss:text-[62px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
              With Facts.
            </h1>
          </h1>

          <div className="ss:flex hidden md:mr-4 mr-0 mt-16">
            <GetStarted />
          </div>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-1 text-[16px]`}>
          We use AI and artificial inteligence to create analytics and business intelligence specifically tailored to meet your business needs, giving
          you up-to date information to make the right decisions.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="" className="w-[100%] h-[100%] relative z-[5]" />
        <div className="absolute z-[0] top-0 w-[40%] h-[35%] pink__gradient" />
        <div className="absolute z-[1] bottom-40 w-[80%] h-[80%] rounded-full white__gradient" />
        <div className="absolute z-[0] top-0 w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  )
}

export default Hero
