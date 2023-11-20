let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({ productName, price });
    total += price;
    updateCart();
    
    // Atualize o contador de itens no carrinho
    const cartItemCount = document.getElementById('cart-item-count');
    cartItemCount.textContent = cart.length;
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${item.productName} - R$ ${item.price.toFixed(2)}</span>
                        <button class="fechar" onclick="removeFromCart(${item.price.toFixed(2)})">
                            <i class="bi bi-x-circle-fill"></i>
                        </button>`;
        cartItems.appendChild(li);
    });

    cartTotal.textContent = total.toFixed(2);
}

function removeFromCart(price) {
    const index = cart.findIndex(item => item.price === price);
    if (index !== -1) {
        cart.splice(index, 1);
        total -= price;
        updateCart();
        
        // Atualize o contador de itens no carrinho
        const cartItemCount = document.getElementById('cart-item-count');
        cartItemCount.textContent = cart.length;
    }
}

function checkout() {
    if (cart.length > 0) {
        alert(`Compra realizada! Total: R$ ${total.toFixed(2)}`);
        cart = [];
        total = 0;
        updateCart();
        
        // Redefina o contador de itens no carrinho para zero
        const cartItemCount = document.getElementById('cart-item-count');
        cartItemCount.textContent = '0';
    } else {
        alert('Seu carrinho está vazio. Adicione produtos antes de finalizar a compra.');
    }
}


/*janeja carrinho de compras*/
const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModalBtn');

openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});