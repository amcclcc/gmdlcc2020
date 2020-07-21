import React from "react"
import { ContextProvider } from "./../../context/Context"

const wrapRootElement = ({ element }) => (
  <ContextProvider>{element}</ContextProvider>
)

export default wrapRootElement
