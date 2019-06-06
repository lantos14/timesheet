import moveMinuteHands from './moveMinuteHands';

function setUpMinuteHands() {
// Find out how far into the minute we are
  const containers = document.querySelectorAll('.minutes-container');
  const secondAngle = containers[0].getAttribute('data-second-angle');
  if (secondAngle > 0) {
    // Set a timeout until the end of the current minute, to move the hand
    const delay = (((360 - secondAngle) / 6) + 0.1) * 1000;
    setTimeout(() => {
      moveMinuteHands(containers);
    }, delay);
  }
}

export default setUpMinuteHands;
