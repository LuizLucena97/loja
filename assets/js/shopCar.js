var totalAmount = "0,00";
var cart = [];

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
    const button = event.target
    const productInfos = document.querySelector(".card");
    const productImage = productInfos.getElementsByClassName("card-img")[0].src

    const productInfos2 = document.querySelector(".card-body");
    const productTitle = productInfos2.getElementsByClassName("h2")[0].innerText
    const productPrice = productInfos2.getElementsByClassName("h3")[0].innerText

    const productInfos3 = document.querySelector(".list-inline-item-qtd");
    const productQnt = productInfos3.getElementsByClassName("badge bg-secondary")[0].innerText

    // Criar um objeto de item do carrinho
    const cartItem = {
        image: productImage,
        title: productTitle,
        price: productPrice,
        quantity: parseInt(productQnt)
    };

    // Adicionar o novo item ao carrinho
    cart.push(cartItem);

    User
    openOrRefreshWindow();


    var myWindow; // Certifique-se de que myWindow está declarado globalmente

    function openOrRefreshWindow() {
        // Verificar se a janela já foi aberta
        if (!myWindow || myWindow.closed) {
            // Abrir a página em uma nova janela
            myWindow = window.open("card.html", "_blank");
        } else {
            // A janela já está aberta, então atualize-a
            myWindow.location.reload();
            myWindow.focus();
        }
    }
}

// Na página "card.html", você pode recuperar os itens do carrinho do localStorage e exibi-los em uma tabela
