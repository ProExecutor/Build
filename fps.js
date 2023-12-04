// Create a function to calculate the FPS
function calculateFPS() {
    var lastFrameTime = 0;
    var frameCount = 0;
    var lastSecond = Date.now();
    var fps = 0;

    return function() {
        var now = Date.now();
        var delta = now - lastFrameTime;
        lastFrameTime = now;
        frameCount++;

        if (now - lastSecond >= 1000) {
            fps = frameCount;
            frameCount = 0;
            lastSecond += 1000;
            console.log('FPS:', fps);
        }

        // You can also display the FPS on your webpage using DOM manipulation
        // document.getElementById('fpsDisplay').textContent = 'FPS: ' + fps;
    };
}

// Use the function in your animation loop
var updateFPS = calculateFPS();

function animate() {
    requestAnimationFrame(animate);

    // Your rendering code goes here

    // Update the FPS counter
    updateFPS();
}

// Start the animation loop
animate();
