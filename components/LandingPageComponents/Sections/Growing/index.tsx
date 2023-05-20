import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Growing = () => {
  const textScrollVariants = {
    visible: { opacity: 1, top: 0 },
    hidden: { opacity: 0 },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      variants={textScrollVariants}
      initial="hidden"
      className="flex flex-col justify-center items-center gap-y-20 py-10 relative top-[100px] transition-all duration-1000 ease-in-out"
      animate={controls}
    >
      <h1 className="text-[#1E1E1E] font-semibold text-[48px] leading-[48px] text-center ">
        Never stop growing!
      </h1>
      <div className="flex gap-x-5">
        <input
          placeholder="Enter your Email here"
          className="bg-[#fff] border-[#2E353A] border-[1px] border-t-0 border-r-0 w-[400px] text-black border-l-0 h-12 focus:outline-none ::placeholder font-medium placeholder-[#2E353A]"
        />
        <button className="bg-[#3247CF] w-[151px] h-[51px] flex justify-center items-center  rounded-lg">
          <p className="text-white underline underline-offset-auto">
            Join the Waitlist
          </p>
        </button>
      </div>
    </motion.div>
  );
};

export default Growing;
