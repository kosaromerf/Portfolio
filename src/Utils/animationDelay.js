const animationDelay = () => {
  const elements = document.querySelectorAll(".typewriter");
  elements.forEach((e, index) => (e.style.animationDelay = `${index}.1s`));
};

export default animationDelay;
