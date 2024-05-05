const headerVisibility = () => {
  const element = document.getElementById("header");

  const handleScroll = () => {
    if (window.scrollY < 100) {
      element.classList.add("is-visible");
    } else {
      element.classList.remove("is-visible");
    }
  };

  // Initial check when the page loads
  handleScroll();

  // Add event listener to check scroll position
  window.addEventListener("scroll", handleScroll);
};

export default headerVisibility;
