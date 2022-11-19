import "./triangle.css";

/**
 *
 * @param {object} styles
 * @returns determines the triangle styles x position, y position and outline mode and ...
 */
const triangle = (styles = {}) => {
  const {
    x = 0,
    y = 0,
    outline = "filled",
    rotation = 0,
    color = "#212121",
    scale = 1,
  } = styles;

  return `
    <div class="triangle" style="${
      x || y ? "position:absolute;" : ""
    }top:${y};left:${x};transform:rotate(${rotation}deg) scale(${scale});border-bottom-color:${color};"></div>
    `;
};

export default triangle;
