function moveSecondHands() {
  const containers = document.querySelectorAll('.seconds-container');
  setInterval(() => {
    for (let i = 0; i < containers.length; i += 1) {
      if (containers[i].angle === undefined) {
        containers[i].angle = 6;
      } else {
        containers[i].angle += 6;
      }
      // console.log('-- moveSecondHands -- containers[i].angle: ', containers[i].angle);
      containers[i].style.webkitTransform = `rotateZ(${containers[i].angle}deg)`;
      containers[i].style.transform = `rotateZ(${containers[i].angle}deg)`;
    }
  }, 1000);
}

export default moveSecondHands;
