document.addEventListener("DOMContentLoaded", () => {
  const productsData = {
    "Camiseta 2Pac": {
      name: "Camiseta 2Pac",
      price: "R$ 89,99",
      image: "./img/2PAC PEITA.jpg",
      description: "Uma peça unica que celebra o legado de 2Pac.",
    },
    "Camiseta Kendrick": {
      name: "Camiseta Kendrick",
      price: "R$ 89,99",
      image: "./img/KENDRICK PEITA.jpg",
      description: "Kendrick Lamar em estilo urbano.",
    },
    "Camiseta Kendrick": {
      name: "Camiseta Kendrick",
      price: "R$ 89,99",
      image: "./img/KENDRICK SB.jpg",
      description: "Kendrick Lamar no Super Bowl.",
    },
  };

  const params = new URLSearchParams(window.location.search);
  const productNameFromUrl = params.get("produto");

  const product = productsData[productNameFromUrl];

  if (product) {
    document.title = `${product.name} - LARANJODINA STORE`;
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-price").textContent = product.price;
    document.getElementById("product-description").textContent =
      product.description;

    const productImage = document.querySelector(".product-image-gallery img");
    productImage.src = product.image;
    productImage.alt = product.name;

    const buyButton = document.getElementById("buy-now-button");
    buyButton.href = `checkout.html?produto=${encodeURIComponent(
      product.name
    )}`;
  } else {
    const detailSection = document.querySelector(
      ".product-detail-section .container"
    );
    detailSection.innerHTML =
      '<h1>Produto não encontrado!</h1><p>O produto que você está procurando não existe ou foi removido. <a href="index.html">Voltar para a página inicial</a>.</p>';
  }
});
