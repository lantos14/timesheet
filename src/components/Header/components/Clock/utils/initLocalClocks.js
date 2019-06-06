function initLocalClocks() {
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();

  const hands = [
    {
      hand: 'hours',
      angle: (hours * 30) + (minutes / 2),
    },
    {
      hand: 'minutes',
      angle: minutes * 6,
    },
    {
      hand: 'seconds',
      angle: seconds * 6,
    },
  ];

  for (let j = 0; j < hands.length; j += 1) {
    const elements = document.querySelectorAll(`.${hands[j].hand}`);
    for (let k = 0; k < elements.length; k += 1) {
      elements[k].style.webkitTransform = `rotateZ(${hands[j].angle}deg)`;
      elements[k].style.transform = `rotateZ(${hands[j].angle}deg)`;
      if (hands[j].hand === 'minutes') {
        elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
      }
    }
  }
}

export default initLocalClocks;
