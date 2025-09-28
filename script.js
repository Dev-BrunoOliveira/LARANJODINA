// script.js (versão correta)
document.addEventListener('DOMContentLoaded', () => {

    console.log("LARANJODINA STORE script.js carregado com sucesso!");

    const setupProductLinks = () => {
        const productCards = document.querySelectorAll('a.product-card');

        productCards.forEach(card => {
            const productNameElement = card.querySelector('h3');
            if (productNameElement) {
                const productName = productNameElement.textContent;
                const checkoutUrl = `checkout.html?produto=${encodeURIComponent(productName)}`;
                card.setAttribute('href', checkoutUrl);
            }
        });
    };

    setupProductLinks();
});