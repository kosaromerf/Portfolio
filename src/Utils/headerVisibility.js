const headerVisibility = () => {
  const element = document.getElementById("header");
  let lastScrollTop = 0;

  const handleScroll = () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScrollTop) {
      element.classList.remove("is-visible");
    } else {
      element.classList.add("is-visible");
    }

    lastScrollTop = currentScroll;
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll);
};

export default headerVisibility;
