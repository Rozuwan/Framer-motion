import { motion } from "motion/react";
const App = () => {
  return (
    
      <div className="bg-black h-screen p-3">
          <motion.div
          whileHover={{
            backgroundColor:'green'
          }}
          whileTap={{
            scale:0.9
          }}
           className="h-80 w-80 bg-amber-300 border-2 border-amber-50 "
           >
          </motion.div>
      </div>
    
  )
}

export default App
