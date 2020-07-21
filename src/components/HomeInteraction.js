import React from "react"
import Sketch from "react-p5"

function HomeInteraction() {
  let x = 50
  let y = 50

  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef)
    x = p5.mouseX
    y = p5.mouseY
  }

  const draw = (p5) => {
    p5.background(255)
    p5.fill(200)
    p5.noStroke()
    p5.ellipse(p5.mouseX, p5.mouseY, 200, 200)
  }

  const windowResized = (p5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight)
  }

  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />
}

export default HomeInteraction
