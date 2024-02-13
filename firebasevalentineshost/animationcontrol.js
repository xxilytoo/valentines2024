// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const openCheckbox = document.getElementById("open");
    const textOne = document.querySelector(".text-one");
    const sidenote = document.querySelector(".woaini");
    openCheckbox.addEventListener("change", function() {
      if (this.checked) {
        textOne.classList.add("typing-animation");
        sidenote.classList.add("typing-animation");
      } else {
        textOne.classList.remove("typing-animation");
        sidenote.classList.remove("typing-animation");
      }
    });
  });
  