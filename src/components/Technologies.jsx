import { RiReactjsLine } from "react-icons/ri";
import {
  SiMongodb,
  SiMysql,
  SiSpring,
  SiExpress,
  SiC,
  SiKotlin,
  SiPhp,
  SiHtml5,
  SiCss3,
  SiPython,
  SiJavascript,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:1.5}} className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1.5}} className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-blue-500" />
        </motion.div>

        <motion.div  variants={iconVariants(3)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>

        <motion.div  variants={iconVariants(5)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-green-400" />
        </motion.div>

        <motion.div  variants={iconVariants(2)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMysql className="text-7xl text-blue-600" />
        </motion.div>

        <motion.div  variants={iconVariants(6)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiSpring className="text-7xl text-green-600" />
        </motion.div>

        <motion.div  variants={iconVariants(1)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className="text-7xl text-gray-500" />
        </motion.div>

        <motion.div  variants={iconVariants(5)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiC className="text-7xl text-blue-800" />
        </motion.div>

        <motion.div  variants={iconVariants(6)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiKotlin className="text-7xl text-purple-500" />
        </motion.div>

        <motion.div  variants={iconVariants(2.5)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPhp className="text-7xl text-indigo-500" />
        </motion.div>

        <motion.div  variants={iconVariants(3)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiHtml5 className="text-7xl text-orange-600" />
        </motion.div>

        <motion.div  variants={iconVariants(5)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiCss3 className="text-7xl text-blue-400" />
        </motion.div>

        <motion.div  variants={iconVariants(2)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPython className="text-7xl text-yellow-400" />
        </motion.div>

        <motion.div  variants={iconVariants(6)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiJavascript className="text-7xl text-yellow-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
