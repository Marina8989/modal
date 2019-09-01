const trigger = document.querySelector(".trigger");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");

function z() {
  trigger.addEventListener("click", function() {
    modal.classList.add("open");
  });
  closeBtn.addEventListener("click", function() {
    modal.classList.remove("open");
  });
  window.addEventListener("click", function(event) {
    if (event.target === modal) {
      modal.classList.remove("open");
    }
  });
}
z();
