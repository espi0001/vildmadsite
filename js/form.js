document.addEventListener("DOMContentLoaded", function () {
  // Hent alle containerne og deres tilhørende formular-container
  var containers = document.querySelectorAll(".sign");
  var formContainers = document.querySelectorAll("#login-form-container");

  // Tilføj eventlistener til hver container
  containers.forEach(function (container, index) {
    container.addEventListener("click", function (event) {
      event.preventDefault();
      // Skjul alle form-containerne
      formContainers.forEach(function (formContainer) {
        formContainer.style.display = "none";
      });
      // Vis kun form-containeren, der matcher indekset for den klikkede container
      formContainers[index].style.display = "block";
    });
  });
});
