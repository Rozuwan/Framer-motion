import { motion } from "motion/react";
const App = () => {
  return (
    
      <div className="bg-black h-screen p-3">
          <motion.div
          animate={{
            rotate:360,
            x:300
          }}
          transition={{
            delay:3,
            duration:3
          }}
           className="h-80 w-80 bg-amber-300"
           >
          </motion.div>
      </div>
    
  )
}

export default App
