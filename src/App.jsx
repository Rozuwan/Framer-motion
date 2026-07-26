import { motion } from "motion/react";
const App = () => {
  return (
    
      <div className="bg-black h-screen p-3">
          <motion.div
          initial={{
            x:0,
            y:0
          }}
          animate={{
            x:[0,800,800,0,0],
            y:[0,0,400,400,0],
            rotate:500
          }}
          transition={{
            delay:1,
            duration:3,
            repeat:Infinity
            
          }}
           className="h-80 w-80 bg-amber-300 border-2 border-amber-50 "
           >
          </motion.div>
      </div>
    
  )
}

export default App
