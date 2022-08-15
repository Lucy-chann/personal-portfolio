/* utility functions */

export default function utils() {
  /**
   * @param {NodeList}
   */

  const calcMaxHeight = function (items) {
    let maxHeight = 0;

    items.forEach((item) => {
      const h = item.clientHeight;
      maxHeight = h > maxHeight ? h : maxHeight;
    });
    return maxHeight;
  };

  /**
   * @param {function}
   * @param {int}
   */

  const requestInterval = function (fn, delay) {
    const requestAnimFrame = (function () {
      return (
        window.requestAnimationFrame ||
        function (callback, element) {
          window.setTimeout(callback, 1000 / 60);
        }
      );
    })();

    let start = new Date().getTime(),
      handle = {};

    function loop() {
      const current = new Date().getTime(),
        delta = current - start;

      if (delta >= delay) {
        fn.call();
        start = new Date().getTime();
      }

      handle.value = requestAnimFrame(loop);
    }

    handle.value = requestAnimFrame(loop);

    return handle;
  };

  /**
   * Behaves the same as clearInterval except uses cancelRequestAnimationFrame() where possible for better performance
   * @param {int|object} handle The callback function
   */
  const clearRequestInterval = function (handle) {
    window.cancelAnimationFrame
      ? window.cancelAnimationFrame(handle.value)
      : clearInterval(handle);
  };

  return {
    calcMaxHeight,
    requestInterval,
    clearRequestInterval,
  };
}
