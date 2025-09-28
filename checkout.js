document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const produtoNome = params.get("produto");

  const summaryItemsContainer = document.getElementById("summary-items");

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
  } else {
    summaryItemsContainer.innerHTML = "<p>Nenhum produto no carrinho.</p>";
  }

  const paymentForm = document.getElementById("payment-form");

  paymentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    alert("Obrigado pela sua compra! Redirecionando para pagamento...");

    window.location.href = "https://pagamento-exemplo.com";
  });
});
