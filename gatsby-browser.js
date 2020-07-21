/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
// import "typeface-ibm-plex-sans"
// import "typeface-space-mono"
// import "./src/fonts/index.css"

import CustomLayout from "./src/gatsby/browser/wrapPageElement"
// import Context from "./src/gatsby/browser/wrapRootElement"
import scrollDelay from "./src/gatsby/browser/shouldUpdateScroll"

export const wrapPageElement = CustomLayout
// export const wrapRootElement = Context
export const shouldUpdateScroll = scrollDelay

// export const onInitialClientRender = () => {
//   window.scrollTo(0, 0)
// }

// export const onServiceWorkerUpdateReady = () => {
//   setTimeout(() => {
//     window.dispatchEvent(new Event("sw-updated"))
//   }, 1000)
// }
