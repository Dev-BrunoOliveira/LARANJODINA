document.addEventListener("DOMContentLoaded", () => {
  const productsData = {
    "Camiseta 2Pac": {
      name: "Camiseta 2Pac",
      price: "R$ 89,99",
      image: "./img/2PAC PEITA.png",
      description:
        "Camiseta em malha 100% algodão com estampa de alta qualidade do lendário rapper Tupac Shakur. Perfeita para fãs de hip-hop e estilo dos anos 90.",
    },
    "Camiseta Senna": {
      name: "Camiseta Senna",
      price: "R$ 89,99",
      image: "./img/SENNA PEITA.png",
      description:
        "Homenageie o ídolo nacional Ayrton Senna com esta camiseta exclusiva. Feita em algodão premium, é ideal para os apaixonados por automobilismo e pela história do Brasil.",
    },
    "Camiseta Tyler The Creator": {
      name: "Camiseta Tyler The Creator",
      price: "R$ 89,99",
      image: "./img/TYLER PEITA.png",
      description:
        "Mostre seu estilo único com a estampa inspirada no icônico Tyler, The Creator. Design vibrante em tecido macio e confortável.",
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
