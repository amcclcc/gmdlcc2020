import React from "react"
import { motion, AnimatePresence } from "framer-motion"

const Transition = ({ children, location }) => {
  const duration = 0.35

  const variantsFade = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: duration,
        delay: duration,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: duration },
    },
  }
  const variantsVertical = {
    initial: {
      opacity: 0,
      y: "100vh",
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        delay: duration,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: duration },
    },
  }

  const locationPathLength = location.pathname.split("/").length

  return (
    <AnimatePresence>
      <motion.div
        key={location.pathname}
        variants={locationPathLength > 3 ? variantsVertical : variantsFade}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default Transition
