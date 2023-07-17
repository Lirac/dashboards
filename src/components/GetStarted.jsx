import { arrowUp } from '../assets'
import styles from '../style'

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] relative rounded-full bg-blue-gradient p-[4px] cursor-pointer shadow-lg shadow-cyan-500/50 hover:scale-110 transition ease-in duration-700 delay-200 pulse`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
            <span className="text-gradient">Get</span>
          </p>
          <img src={arrowUp} alt="hero" className="w-[23px] h-[23px] object-contain" />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  )
}

export default GetStarted
