import { motion } from "motion/react";
const App = () => {
  return (
    <div className="bg-black w-full h-screen">
      <motion.div
      className="h-100 w-100 bg-amber-400 border-2 border-amber-100"
      animate={{ 
        rotate: 360,
        x:800,
       
      }}
      transition={{
        duration:3,
        delay:1
      }}
      >

      </motion.div>
    </div>
  );
};

export default App;
