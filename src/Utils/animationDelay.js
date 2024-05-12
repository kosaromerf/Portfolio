const animationDelay = () => {
  const elements = document.querySelectorAll(".typewriter");
  elements.forEach((e, index) => {
    let delay = 0;
    for (let i = 1; i <= index; i++) {
      delay += elements[i - 1].innerText.length;
    }
    let contentLength = e.innerText.length;

    const typingKeyframes = `@keyframes typing-${index} {
      from { width: 0; }
      to { width: ${contentLength}ch; }
    }`;

    const style = document.createElement("style");
    style.innerHTML = typingKeyframes;
    document.head.appendChild(style);

    e.style.animation = `typing-${index} ${contentLength / 20}s forwards,
      blink-caret 0.6s forwards infinite,
      matrix ${contentLength / 20}s steps(40, end)`;

    e.style.animationDelay = `${delay / 20}s`;
  });
};

export default animationDelay;
