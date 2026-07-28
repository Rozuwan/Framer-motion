import { motion } from "motion/react";
const App = () => {
 
  return (
    <div className="bg-black h-screen p-3">
      <motion.div
        className="h-80 w-80 bg-amber-300 border-2 rounded-lg"
        // whileHover={{
        //   backgroundColor:'red',
        //   scale:0.5
        // }}

        // whileTap={{
        //   backgroundColor:'pink',
        //   rotate:50
        // }}
        drag
        whileDrag={{
          scale:1.2,
          backgroundColor:'red',
        }}
        transition={{
          type:'spring',
          stiffness:1000
        }}
      ></motion.div>
    </div>
  );
};

export default App;
``