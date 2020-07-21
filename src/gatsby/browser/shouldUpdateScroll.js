let previousLocation = false

const scrollDelay = ({ routerProps: { location }, getSavedScrollPosition }) => {
  if (location.pathname === previousLocation?.pathname) {
    return false
  }

  previousLocation = location

  if (location.action === "PUSH") {
    window.scrollTo(0, 0)
  } else {
    const savedPosition = getSavedScrollPosition(location)
    window.scrollTo(...(savedPosition || [0, 0]))
  }
  return false
}

export default scrollDelay
