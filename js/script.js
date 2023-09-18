document
  .getElementById("hamburger-menu")
  .addEventListener("click", function () {
    // Open modal
    const modal = document.getElementById("modal-container");
    modal.style.display = "grid";
  });

document.getElementById("close-modal").addEventListener("click", function () {
  // Open modal
  const modal = document.getElementById("modal-container");
  modal.style.display = "none";
});
