const FPS = 1120; // Set the frames per second you want.
let lastTimestamp = 0;

function update(timestamp) {
  requestAnimationFrame(update);

  // Calculate the time elapsed since the last frame.
  const elapsed = timestamp - lastTimestamp;

  // Check if the elapsed time is greater than the frame interval.
  if (elapsed > (1000 / FPS)) {
    lastTimestamp = timestamp - (elapsed % (1000 / FPS));

    // <<< PUT YOUR ANIMATION CODE HERE >>>
    // This is where you would update your animation.
  }
}

// Start the animation loop.
update(performance.now());
