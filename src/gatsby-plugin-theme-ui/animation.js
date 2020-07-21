// animation

export default {
  animation: {
    page: {
      duration: 0.35,
    },
    menu: {
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 200,
      },
      initial: {
        opacity: 0,
      },
      animate: {
        opacity: 1,
      },
      exit: {
        opacity: 0,
      },
    },
  },
}
