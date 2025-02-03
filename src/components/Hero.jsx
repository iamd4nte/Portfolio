import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { TypeAnimation } from 'react-type-animation'; 
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div style={{ zIndex: 1 }}>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {/* Hi, I'm <span className='text-[#915EFF]'>Aniket</span> */}

            Hi, I'm{" "}
            <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9}}
                className="text-[#915EFF]"
              >
              Aniket
            </motion.span>

          </h1>

          {/* <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I transform raw data into actionable insights and <br className='sm:block hidden' />
            complex problems into innovative solutions
          </p> */}

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <span>I transform</span>
            <span className="text-[#915eff]">
              <Typewriter
                words={[' raw data into actionable insights', ' complex problems into innovative solutions']}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={60}
                deleteSpeed={30}
                delaySpeed={900}
              />
            </span>
          </p>

          <div className="flex lg:flex-row mt-6">   
            <a
                href="https://drive.google.com/file/d/1p9I3a65DxLjJVDKEvNXiUNM85hR430mA/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4 sm:mb-0 sm:mr-4 green-pink-gradient p-[2px] rounded-[10px] shadow-card"
              >
                <button className="bg-[#151131] text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-95">
                    <strong>Download CV</strong>
                </button>
            </a>
          </div>

        </div>
      </div>
      
      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
