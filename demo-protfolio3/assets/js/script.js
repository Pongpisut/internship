function togglesOpen(a) {
  a.classList.toggle("change");
}
$(document).ready(function () {
  $(".toggles").on("click", function () {
    $(" .nav ul").toggleClass("open");
  });
});
