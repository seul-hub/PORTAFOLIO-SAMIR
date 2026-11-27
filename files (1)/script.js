// Año actual en el pie de página
document.getElementById("year").textContent = new Date().getFullYear();

// Marca en el menú la sección que se está viendo
var links = document.querySelectorAll("nav a");
var secciones = document.querySelectorAll("main section");
var observador = new IntersectionObserver(function (entradas) {
  entradas.forEach(function (e) {
    if (e.isIntersecting) {
      links.forEach(function (a) {
        a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id);
      });
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });
secciones.forEach(function (s) { observador.observe(s); });

// Botón para volver arriba
(function(){
  var b=document.getElementById("totop");
  function t(){b.classList.toggle("show",window.scrollY>400)}
  window.addEventListener("scroll",t,{passive:true}); t();
  b.addEventListener("click",function(){
    var r=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({top:0,behavior:r?"auto":"smooth"});
  });
})();
