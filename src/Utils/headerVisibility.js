const headerVisibility = () => {
  window.addEventListener("scroll", function () {
    const element = document.getElementById("header");
    if (window.scrollY < 100) {
      element.classList.add("is-visible");
    } else {
      element.classList.remove("is-visible");
    }
  });
};

export default headerVisibility;
