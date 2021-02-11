let lastTime = 0;
// prefixer
const prefixes = ["ms", "webkit", "o", "moz"];

let requestAnimationFrame, cancelAnimationFrame;
// mode
const isServer = typeof window === "undefined";
if (isServer) {
  // func placeholder
  requestAnimationFrame = function() {
    return;
  };
  cancelAnimationFrame = function() {
    return;
  };
} else {
  // search raw implementation
  // let prefix;
  // requestAnimationFrame = window.requestAnimationFrame;
  // cancelAnimationFrame = window.requestAnimationFrame;

  // for (let i = 0; i < prefixes.length; i++) {
  //   if (requestAnimationFrame && cancelAnimationFrame) {
  //     break;
  //   }
  //   prefix = prefixes[i];
  //   requestAnimationFrame =
  //     requestAnimationFrame || window[prefix + "RequestAnimationFrame"];
  //   cancelAnimationFrame =
  //     cancelAnimationFrame ||
  //     window[prefix + "CancelAnimationFrame"] ||
  //     window[prefix + "CancelRequestAnimationFrame"];
  // }

  // polyfill with settimeout
  if (!requestAnimationFrame || !cancelAnimationFrame) {
    requestAnimationFrame = function(callback) {
      let curTime = new Date().getTime();
      let timeToCall = Math.max(0, 16 - (curTime - lastTime));
      const id = window.setTimeout(() => {
        callback(curTime + timeToCall);
      }, timeToCall);
      lastTime = curTime + timeToCall;
      return id;
    };
    cancelAnimationFrame = function(id) {
      window.clearTimeout(id);
    };
  }
}

export { requestAnimationFrame, cancelAnimationFrame };
