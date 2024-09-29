document.addEventListener("DOMContentLoaded", function () {
  updateCartPage();
});

let userdetails = JSON.parse(localStorage.getItem("users"));
let isLogin = localStorage.getItem("isLogin") || false;
if (!isLogin) {
  alert("sign In");
  window.location.href = "/Pages/signUp.html";
}

function updateCartPage() {
  const cartItemsContainer = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total-price");
  const buyButton = document.getElementById("buy-button");

  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartItemsContainer.innerHTML = "";

  let totalPrice = 0;

  cartItems.forEach((item, index) => {
    const price = parseFloat(item.price.replace(/[^\d.]/g, ""));

    if (isNaN(price)) {
      console.error(`Invalid price for item: ${item.title}`);
      return;
    }

    const colDiv = document.createElement("div");
    colDiv.classList.add("col-lg-6", "col-md-4", "col-sm-12", "mb-4");

    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const img = document.createElement("img");
    img.classList.add("img-fluid", "card-img-top");
    img.src = item.image;
    img.alt = "Product Image";

    const cardBodyDiv = document.createElement("div");
    cardBodyDiv.classList.add("card-body");

    const titleH4 = document.createElement("h4");
    titleH4.classList.add("card-title");
    titleH4.innerText = item.title;

    const priceP = document.createElement("p");
    priceP.classList.add("card-text");
    priceP.innerHTML = `Price: ₹${price.toLocaleString()}`;

    const exshowroomP = document.createElement("p");
    exshowroomP.classList.add("card-text");
    exshowroomP.innerHTML = `Ex-Showroom Price`;

    const quantityLabel = document.createElement("label");
    quantityLabel.innerHTML = `Quantity: `;

    const quantitySelect = document.createElement("select");
    quantitySelect.classList.add("form-control");
    quantitySelect.style.width = "100px";
    for (let i = 1; i <= 10; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.innerText = i;
      if (i === item.quantity) {
        option.selected = true;
      }
      quantitySelect.appendChild(option);
    }

    quantitySelect.addEventListener("change", function () {
      item.quantity = parseInt(this.value);
      cartItems[index] = item;
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      updateCartPage();
    });

    const totalItemPrice = price * item.quantity;
    const totalItemPriceP = document.createElement("p");
    totalItemPriceP.classList.add("card-text");
    totalItemPriceP.innerHTML = `Total Price: ₹${totalItemPrice.toLocaleString()}`;

    const removeButton = document.createElement("button");
    removeButton.classList.add("btn", "btn-danger", "mt-2");
    removeButton.innerText = "Remove from Cart";

    removeButton.addEventListener("click", function () {
      cartItems.splice(index, 1);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      updateCartPage();
    });

    cardBodyDiv.appendChild(titleH4);
    cardBodyDiv.appendChild(priceP);
    cardBodyDiv.appendChild(exshowroomP);
    cardBodyDiv.appendChild(quantityLabel);
    cardBodyDiv.appendChild(quantitySelect);
    cardBodyDiv.appendChild(totalItemPriceP);
    cardBodyDiv.appendChild(removeButton);

    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBodyDiv);

    colDiv.appendChild(cardDiv);
    cartItemsContainer.appendChild(colDiv);

    totalPrice += totalItemPrice;
  });

  totalPriceElement.innerHTML = `Total Price: ₹${totalPrice.toLocaleString()}`;

  buyButton.addEventListener("click", function () {
    let itemsList = cartItems
      .map((item) => `${item.quantity} ${item.title}`)
      .join(", ");
    alert(
      `You are Buying:\n${itemsList}\n \n Total Price: ₹${totalPrice.toLocaleString()}`
    );
    localStorage.removeItem("cartItems");
    updateCartPage();
    cartItems = [];
  });
}
