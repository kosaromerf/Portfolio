const scroolTop = () => {
  document.getElementById("logo").addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
};

export default scroolTop;
