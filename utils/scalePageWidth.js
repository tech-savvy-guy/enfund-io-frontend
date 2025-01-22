export function scalePageWidth() {
  const width = window.innerWidth
  let scale = 1

  if (width >= 992 && width <= 1600) {
    scale = 0.9
  } else if (width >= 700 && width < 768) {
    scale = 0.8
  } else if (width >= 600 && width < 700) {
    scale = 0.75
  } else if (width <= 600) {
    scale = 0.5
  }

  document.body.style.transform = `scale(${scale})`
  document.body.style.transformOrigin = "top left"
  document.body.style.width = `${100 / scale}%`
  document.body.style.height = `${100 / scale}%`
}

// Add event listener for resize
window.addEventListener("resize", scalePageWidth)

// Initial call
scalePageWidth()

