document.addEventListener("DOMContentLoaded", () => {
  const productsData = {
    "Camiseta 2Pac": {
      name: "Camiseta 2Pac",
      price: "R$ 89,99",
      image: "./img/2PAC PEITA.jpg",
      description: "Descrição da camiseta do 2Pac.",
    },
    "Camiseta Kendrick": {
      name: "Camiseta Kendrick",
      price: "R$ 89,99",
      image: "./img/KENDRICK PEITA.jpg",
      description: "Descrição da camiseta do Kendrick.",
    },
    "Camiseta Kendrick": {
      name: "Camiseta Kendrick SB",
      price: "R$ 89,99",
      image: "./img/KENDRICK SB.jpg",
      description: "Descrição da camiseta do Tyler.",
    },
    
  };

  const params = new URLSearchParams(window.location.search);
  const productNameFromUrl = params.get("produto");

  const product = productsData[productNameFromUrl];

  const summaryItemsContainer = document.getElementById("summary-items");
  const hiddenProductInput = document.getElementById("hidden-product-name");

  if (product) {
    const productElement = document.createElement("div");
    productElement.classList.add("summary-item");

    productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="item-details">
                <p>${product.name}</p>
                <span>${product.price}</span>
            </div>
        `;
    summaryItemsContainer.appendChild(productElement);

    if (hiddenProductInput) {
      hiddenProductInput.value = product.name;
    }
  } else {
    summaryItemsContainer.innerHTML = "<p>Nenhum produto no carrinho.</p>";
  }
});
