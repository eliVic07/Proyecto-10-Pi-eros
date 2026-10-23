const pestanas = document.querySelectorAll(".pestana");
const contenidos = document.querySelectorAll(".contenido");

pestanas.forEach(function (pestana) {
  pestana.addEventListener("click", function () {
    pestanas.forEach(function (p) {
      p.classList.remove("activa");
    });
    contenidos.forEach(function (c) {
      c.classList.remove("activo");
    });

    pestana.classList.add("activa");
    const id = pestana.getAttribute("data-id");
    document.getElementById(id).classList.add("activo");
  });
});
