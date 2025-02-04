const cart = {
    items: {},
    addItem(id, name, price) {
        if (this.items[id]) {
            this.items[id].quantity++;
        } else {
            this.items[id] = { name, price, quantity: 1 };
        }
        this.updateCart();
    },
    removeItem(id) {
        delete this.items[id];
        this.updateCart();
    },
    calculateTotal() {
        return Object.keys(this.items).reduce((total, id) => {
            return total + this.items[id].price * this.items[id].quantity;
        }, 0);
    },
    updateCart() {
        const cartList = document.getElementById('cart-list');
        cartList.innerHTML = '';
        Object.entries(this.items).forEach(([id, product]) => {
            const li = document.createElement('li');
            li.textContent = `${product.name} - $${product.price} x ${product.quantity}`;
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.onclick = () => this.removeItem(id);
            li.appendChild(removeButton);
            cartList.appendChild(li);
        });
        document.getElementById('total-price').textContent = this.calculateTotal();
    },
    clearCart() {
        this.items = {};
        this.updateCart();
    }
};

function addToCart(id, name, price) {
    cart.addItem(id, name, price);
}

function clearCart() {
    cart.clearCart();
}


