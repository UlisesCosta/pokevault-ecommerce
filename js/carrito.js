const cartItems = document.querySelectorAll(".cart-item");
const quantityInputs = document.querySelectorAll(".quantity-input");
const cartCount = document.getElementById("cart-count");
const summaryUnitsCount = document.getElementById("summary-units-count");
const summarySubtotal = document.getElementById("summary-subtotal");
const summaryGrandTotal = document.getElementById("summary-grand-total");

function formatCurrency(value) {
    return value.toLocaleString("es-MX", {
        style: "currency",
        currency: "MXN"
    });
}

function normalizeQuantity(value) {
    const quantity = parseInt(String(value).replace(/\D/g, ""), 10);

    if (Number.isNaN(quantity) || quantity < 1) {
        return 1;
    }

    return quantity;
}

function updateCartTotals() {
    let subtotal = 0;
    let totalUnits = 0;

    document.querySelectorAll(".cart-item").forEach((item) => {
        const price = Number(item.dataset.price);
        const input = item.querySelector(".quantity-input");
        const itemSubtotal = item.querySelector(".item-subtotal");

        if (!input || !itemSubtotal) {
            return;
        }

        const quantity = normalizeQuantity(input.value);

        input.value = quantity;

        const itemTotal = price * quantity;

        itemSubtotal.textContent = formatCurrency(itemTotal);

        subtotal += itemTotal;
        totalUnits += quantity;
    });

    if (summarySubtotal) {
        summarySubtotal.textContent = formatCurrency(subtotal);
    }

    if (summaryGrandTotal) {
        summaryGrandTotal.textContent = formatCurrency(subtotal);
    }

    if (summaryUnitsCount) {
        summaryUnitsCount.textContent = totalUnits;
    }

    if (cartCount) {
        cartCount.textContent = totalUnits;
    }
}

function changeQuantity(button, amount) {
    const cartItem = button.closest(".cart-item");

    if (!cartItem) {
        return;
    }

    const input = cartItem.querySelector(".quantity-input");

    if (!input) {
        return;
    }

    const currentQuantity = normalizeQuantity(input.value);
    const newQuantity = Math.max(1, currentQuantity + amount);

    input.value = newQuantity;

    updateCartTotals();
}

document.addEventListener("click", (event) => {
    const target = event.target;

    if (!(target instanceof HTMLElement)) {
        return;
    }

    if (target.closest(".qty-btn-plus")) {
        changeQuantity(target.closest(".qty-btn-plus"), 1);
        return;
    }

    if (target.closest(".qty-btn-minus")) {
        changeQuantity(target.closest(".qty-btn-minus"), -1);
        return;
    }

    const deleteButton = target.closest(".delete-btn");

    if (deleteButton) {
        const cartItem = deleteButton.closest(".cart-item");

        if (cartItem) {
            cartItem.remove();
            updateCartTotals();
        }

        return;
    }

    if (target.closest(".clear-cart-btn")) {
        document.querySelectorAll(".cart-item").forEach((item) => {
            item.remove();
        });

        updateCartTotals();
    }
});

document.addEventListener("input", (event) => {
    const target = event.target;

    if (!(target instanceof HTMLInputElement)) {
        return;
    }

    if (!target.classList.contains("quantity-input")) {
        return;
    }

    target.value = target.value.replace(/\D/g, "");

    updateCartTotals();
});

document.addEventListener("change", (event) => {
    const target = event.target;

    if (!(target instanceof HTMLInputElement)) {
        return;
    }

    if (!target.classList.contains("quantity-input")) {
        return;
    }

    target.value = normalizeQuantity(target.value);

    updateCartTotals();
});

updateCartTotals();