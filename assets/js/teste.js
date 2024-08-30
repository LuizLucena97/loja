var cart = [];

// Verifique se há itens salvos no localStorage e carregue-os se existirem
if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
}

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    // Botão add produto ao carrinho
    const addToCartButtons = document.getElementsByClassName("btn btn-success btn-lg");
    for (var i = 0; i < addToCartButtons.length; i++) {
        addToCartButtons[i].addEventListener("click", addProductToCart);
    }
}

function addProductToCart(event) {
    const button = event.target;
    const productInfos = document.querySelector(".card");
    const productImage = productInfos.getElementsByClassName("card-img")[0].src;

    const productInfos2 = document.querySelector(".card-body");
    const productTitle = productInfos2.getElementsByClassName("h2")[0].innerText;
    const productPrice = parseFloat(productInfos2.getElementsByClassName("h3")[0].innerText.replace('R$',"").replace(",", "."));

    const productInfos3 = document.querySelector(".list-inline-item-qtd");
    const productQnt = parseInt(productInfos3.getElementsByClassName("badge bg-secondary")[0].innerText);

    // Verifica se o item já existe no carrinho
    const existingCartItemIndex = cart.findIndex(item => item.title === productTitle);

    if (existingCartItemIndex !== -1) {
        // Se o item já estiver no carrinho, aumente a quantidade
        cart[existingCartItemIndex].quantity += productQnt;
        cart[existingCartItemIndex].price == productPrice;
    } else {
        // Caso contrário, crie um novo item no carrinho
        const cartItem = {
            image: productImage,
            title: productTitle,
            price: productPrice,
            quantity: productQnt
        };

        cart.push(cartItem);
    }

    // Atualize o carrinho no localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    window.location.href = "card.html";
}





// Na página "card.html", você pode recuperar os itens do carrinho do localStorage e exibi-los em uma tabela
