// checkout.js (Versão final para Formspree)
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const produtoNome = params.get("produto");

  const summaryItemsContainer = document.getElementById("summary-items");

  const hiddenProductInput = document.getElementById("hidden-product-name");

  if (produtoNome) {
    const productElement = document.createElement("div");
    productElement.classList.add("summary-item");
    productElement.innerHTML = `
            <img src="./img/placeholder.png" alt="Imagem do produto">
            <div class="item-details">
                <p>${produtoNome}</p>
                <span>R$ 89,99</span>
            </div>
        `;
    summaryItemsContainer.appendChild(productElement);

    if (hiddenProductInput) {
      hiddenProductInput.value = produtoNome;
    }
  } else {
    summaryItemsContainer.innerHTML = "<p>Nenhum produto no carrinho.</p>";
  }
});
