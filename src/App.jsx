import { motion } from "motion/react";
const App = () => {
  return (
    <section className="bg-neutral-950 h-screen px-12 py-10">
      <div className="max-w-6xl mx-auto min-h-[80vh] flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="text-orange-400 font-medium tracking-widest uppercase">
            Creative Studio
          </span>

          <h1 className="mt-4 text-6xl font-bold text-white leading-tight">
            Build Modern
            <br />
            Digital Experiences
          </h1>

          <p className="mt-6 text-lg text-neutral-400 max-w-lg leading-8">
            We create visually stunning and high-performance websites with
            beautiful animations and immersive user experiences.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="px-6 py-3 rounded-lg bg-orange-500 text-white">
              Get Started
            </button>

            <button className="px-6 py-3 rounded-lg border border-neutral-700 text-white">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80"
            alt="Hero"
            className="w-80px h-80px object-cover rounded-xl md:w-500 md:h-110"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default App;
