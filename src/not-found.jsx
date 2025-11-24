import { motion } from "framer-motion";
import { Home, ArrowRight, Search, AlertCircle, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // ✅ REACT CHANGE

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  };

  const rotatingVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      },
    },
  };

  return (
    <div className="min-h-screen w-full overflow-hidden bg-background text-foreground relative">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 rounded-full border-2 border-primary/20"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-32 right-20 w-40 h-40 rounded-full border border-primary/10"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 0.5 }}
        />
        <motion.div
          className="absolute top-1/2 right-10 w-24 h-24 rounded-lg border-2 border-primary/15"
          variants={rotatingVariants}
          animate="animate"
        />
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="mb-8 flex flex-col items-center"
          variants={itemVariants}
        >
          <div className="relative w-40 h-40 mb-6 flex items-center justify-center">
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-primary/50"
              animate={{ rotate: 360 }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute inset-4 rounded-full border-2 border-transparent border-b-primary border-l-primary/50"
              animate={{ rotate: -360 }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />

            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="z-10"
            >
              <AlertCircle
                className="w-20 h-20 text-primary"
                strokeWidth={1.5}
              />
            </motion.div>
          </div>

          <motion.h1
            className="text-7xl md:text-8xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70"
            variants={itemVariants}
          >
            404
          </motion.h1>

          <motion.div
            className="flex items-center gap-2 text-primary mb-8"
            variants={itemVariants}
          >
            <Zap className="w-5 h-5" />
            <span className="text-lg font-semibold">Page Not Found</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="max-w-2xl text-center mb-12"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Oops! The page you are looking for <span className="text-primary"> does not exist </span>
          </h2>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/">
            <button className="inline-flex cursor-pointer items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              <span>Take Me Home</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </button>
          </Link>
        </motion.div>

        <motion.div
          className="mt-16 text-center text-sm text-muted-foreground"
          variants={itemVariants}
        >
          <p>
            Error Code:{" "}
            <span className="text-primary font-mono">404_LOST_IN_SPACE</span>
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full border-2 border-primary/20 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
    </div>
  );
}
