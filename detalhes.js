const products = {
  "camiseta-2pac": {
    name: "Camiseta 2Pac",
    price: "R$ 89,99",
    imageUrl: "./img/2PAC PEITA.jpg",
    description:
      "Homenageie a lenda do rap com esta estampa icônica de Tupac Shakur. Feita em 100% algodão de alta qualidade, perfeita para quem valoriza estilo e história.",
  },
  "camiseta-tyler": {
    name: "Camiseta Tyler the Creator",
    price: "R$ 89,99",
    imageUrl: "./img/TYLER PEITA.jpg",
    description:
      "Mostre sua admiração pelo estilo único de Tyler, the Creator. Uma camiseta vibrante e cheia de personalidade, com tecido macio e estampa durável.",
  },
  "camiseta-fresh-prince": {
    name: "Camiseta Fresh Prince",
    price: "R$ 89,99",
    imageUrl: "./img/WILL SMITH PEITA.jpg",
    description:
      "Direto de Bel-Air para o seu guarda-roupa. Esta camiseta captura a essência dos anos 90 com a vibe inconfundível de Will Smith. Conforto e nostalgia em uma só peça.",
  },
  "camiseta-king-james": {
    name: "Camiseta King James",
    price: "R$ 89,99",
    imageUrl: "./img/LEBLON PEITA.jpg",
    description:
      "Celebre a grandeza do Rei. Esta camiseta é para os verdadeiros fãs de LeBron James e da realeza do basquete. Design moderno e caimento perfeito.",
  },
  "camiseta-jordan": {
    name: "Camiseta Michael Jordan",
    price: "R$ 89,99",
    imageUrl: "./img/JORDAN PEITA.jpg",
    description:
      "Um ícone atemporal. Vista a silhueta que mudou o jogo para sempre. Essencial para qualquer fã de basquete e cultura sneakerhead. 100% algodão premium.",
  },
  "camiseta-kendrick": {
    name: "Camiseta Kendrick Lamar",
    price: "R$ 89,99",
    imageUrl: "./img/KENDRICK PEITA.jpg",
    description:
      "Uma estampa que reflete a genialidade poética de Kendrick Lamar. Mais do que uma camiseta, uma declaração. Feita para durar, assim como sua música.",
  },
  "camiseta-kendrick-sb": {
    name: "Camiseta Kendrick (SB)",
    price: "R$ 89,99",
    imageUrl: "./img/KENDRICK SB.jpg",
    description:
      "Inspirada na performance icônica do Super Bowl, esta camiseta celebra um momento histórico da música. Design exclusivo Laranjodina com estampa de alta definição.",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");

  const product = products[productId];

  const productName = document.getElementById("product-name");
  const productPrice = document.getElementById("product-price");
  const productDescription = document.getElementById("product-description");
  const productImage = document.querySelector(".product-image-gallery img");
  const buyButton = document.getElementById("buy-now-button");
  const sizeSelector = document.getElementById("size");

  if (product) {
    productName.textContent = product.name;
    productPrice.textContent = product.price;
    productDescription.textContent = product.description;
    productImage.src = product.imageUrl;
    productImage.alt = product.name;

    function updateBuyButtonLink() {
      const selectedSize = sizeSelector.value;

      buyButton.href = `checkout.html?id=${productId}&size=${selectedSize}`;
    }

    updateBuyButtonLink();

    sizeSelector.addEventListener("change", updateBuyButtonLink);
  } else {
    productName.textContent = "Produto não encontrado";
    productDescription.textContent =
      "O produto que você está procurando não existe ou foi removido.";
    productPrice.textContent = "";
  }
});
