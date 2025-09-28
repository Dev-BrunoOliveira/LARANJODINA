document.addEventListener("DOMContentLoaded", () => {
  console.log("LARANJODINA STORE script.js carregado!");

  const setupProductLinks = () => {
    const productCards = document.querySelectorAll("a.product-card");

    productCards.forEach((card) => {
      const productNameElement = card.querySelector("h3");
      if (productNameElement) {
        const productName = productNameElement.textContent;

        const detailUrl = `detalhes-produto.html?produto=${encodeURIComponent(
          productName
        )}`;

        card.setAttribute("href", detailUrl);
      }
    });
  };

  setupProductLinks();
});
