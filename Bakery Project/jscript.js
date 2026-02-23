 function addToCart() {
            let message = document.getElementById("cartMessage");
            message.style.display = "block";

            setTimeout(function () {
                message.style.display = "none";
            }, 2000);
        }

let total = 0;

function addToCart(item, price) {
    let cart = document.getElementById("cart-items");
    let li = document.createElement("li");
    li.textContent = item + " - ₹" + price;
    cart.appendChild(li);

    total += price;
    document.getElementById("total").textContent = total;
}

function checkout() {
    alert("Thank you for your order! Total amount: ₹" + total);
}
