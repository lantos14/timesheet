/* eslint-disable no-param-reassign */
function moveMinuteHands(containers) {
  for (let i = 0; i < containers.length; i += 1) {
    containers[i].style.webkitTransform = 'rotateZ(6deg)';
    containers[i].style.transform = 'rotateZ(6deg)';
  }
  // Then continue with a 60 second interval
  setInterval(() => {
    for (let i = 0; i < containers.length; i += 1) {
      if (containers[i].angle === undefined) {
        containers[i].angle = 12;
      } else {
        containers[i].angle += 6;
      }
      containers[i].style.webkitTransform = `rotateZ(${containers[i].angle}deg)`;
      containers[i].style.transform = `rotateZ(${containers[i].angle}deg)`;
    }
  }, 60000);
}

export default moveMinuteHands;
