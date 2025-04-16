// script.js
document.addEventListener("DOMContentLoaded", () => {
  const ball = document.getElementById("ball");
  const sparkleContainerRight = document.getElementById("sparkleContainerRight");
  const sparkleContainerLeft = document.getElementById("sparkleContainerLeft");
  const imgContainer = document.getElementById("imgContainer");
  const welText = document.getElementById("welText");
  const enterMessage = document.querySelector(".enter-message");
  const eventBurstContainer = document.querySelector(".event-burst-container");
  const letters = [
    { element: document.getElementById("l1"), trigger: 0.2 },
    { element: document.getElementById("l2"), trigger: 0.4 },
    { element: document.getElementById("l3"), trigger: 0.6 }
  ];

  function updatePosition() {
    const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    const maxLeft = window.innerWidth - ball.offsetWidth;
    const ballLeft = scrollPercent * maxLeft;
    ball.style.left = `${ballLeft}px`;

    // Sparkle effects on both sides only when ball reaches right edge
    const isAtRightEdge = ballLeft >= maxLeft - 5;
    sparkleContainerRight.classList.toggle("active", isAtRightEdge);
    sparkleContainerLeft.classList.toggle("active", isAtRightEdge);

    // Letters, logo, and welcome text reveal
    letters.forEach(({ element, trigger }) => {
      element.classList.toggle("revealed", scrollPercent > trigger);
    });

    imgContainer.classList.toggle("revealed", scrollPercent > 0.1);
    welText.classList.toggle("revealed", scrollPercent > 0.15);

    // Enter message visibility
    enterMessage.classList.toggle("visible", scrollPercent > 0.8);

    // Event burst container animation
    eventBurstContainer.classList.toggle("scrolled", scrollPercent > 0.5);
  }

  // Click to enter website
  document.addEventListener("click", () => {
    if (enterMessage.classList.contains("visible")) {
      window.location.href = "Index.html"; // Replace with your main website URL
    }
  });

  // Event listeners
  window.addEventListener("scroll", updatePosition);
  window.addEventListener("resize", updatePosition);
  updatePosition(); // Initial call
});