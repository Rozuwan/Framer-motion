import { motion } from "motion/react";
const App = () => {
  const boxVariants = {
    initial: {
      scale: 1,
      rotate: 0,
      skew: 0,
    },
    hover: {
      scale: 0.5,
      rotate: 15,
      skew: "10deg",
      transition: { duration: 0.3 },
    },
    click: { scale: 0.9, rotate: -15, transition: { duration: 0.3 } },
  };
  return (
    <div className="bg-black h-screen p-3">
      <motion.div
        className="h-80 w-80 bg-amber-300 border-2 rounded-lg"
        variants={boxVariants}
        initial="initial"
        whileHover="hover"
        whileTap="click"
      ></motion.div>
    </div>
  );
};

export default App;
