document.addEventListener("DOMContentLoaded", function () {
    console.log("Página carregada com sucesso!");
  
   
    const navLinks = document.querySelectorAll(".nav-list a");
  
    navLinks.forEach((link) => {
      link.addEventListener("mouseover", () => {
        link.style.color = "#f39c12"; 
      });
  
      link.addEventListener("mouseout", () => {
        link.style.color = "#fff"; 
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const botoesCompra = document.querySelectorAll(".comprar");
  
    botoesCompra.forEach((botao) => {
      botao.addEventListener("click", function () {
        const produto = this.getAttribute("data-produto");
      
        window.location.href = `checkout.html?produto=${encodeURIComponent(produto)}`;
      });
    });
  });
  