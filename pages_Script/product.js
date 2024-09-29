let userdetails = JSON.parse(localStorage.getItem("users"));
let isLogin = localStorage.getItem("isLogin") || false;
if (!isLogin) {
    alert("sign In")
    window.location.href = "/Pages/signUp.html";
}

document.addEventListener("DOMContentLoaded", function () {
    updateShoppingPage();
});

function updateShoppingPage() {

    
    const bikeList = document.getElementById("bike-list");
    const bikeList2 = document.getElementById("bike-list2");
    const bikeList3 = document.getElementById("bike-list3");
    const bikeList4 = document.getElementById("bike-list4");
    const bikeList5 = document.getElementById("bike-list5");
    const bikeList6 = document.getElementById("bike-list6");
    const bikeList7 = document.getElementById("bike-list7");
    const bikeList8 = document.getElementById("bike-list8");
    const bikeList9 = document.getElementById("bike-list9");
    const bikeList10 = document.getElementById("bike-list10");








    const bikes = JSON.parse(localStorage.getItem("bikes")) || [];

    bikeList.innerHTML = "";
    bikeList2.innerHTML = "";
    bikeList3.innerHTML = "";
    bikeList4.innerHTML = "";
    bikeList5.innerHTML = "";
    bikeList6.innerHTML = "";
    bikeList7.innerHTML = "";
    bikeList8.innerHTML = "";
    bikeList9.innerHTML = "";
    bikeList10.innerHTML = "";





    bikes.forEach(bike => {
        const colDiv = document.createElement("div");
        colDiv.classList.add("col-lg-6", "col-md-4", "col-sm-12", "mb-4");

        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");

        const img = document.createElement("img");
        img.classList.add("img-fluid", "card-img-top");
        img.src = bike.image;
        img.alt = "Product Image";

        const cardBodyDiv = document.createElement("div");
        cardBodyDiv.classList.add("card-body");

        const titleH4 = document.createElement("h4");
        titleH4.classList.add("card-title");
        titleH4.innerText = bike.title;

        const textP = document.createElement("p");
        textP.classList.add("card-text");
        textP.innerHTML = bike.text;

        const exShowroomP = document.createElement("p");
        exShowroomP.classList.add("h6");
        exShowroomP.innerText = bike.ex_showroom;

        const priceP = document.createElement("p");
        priceP.classList.add("card-text", "h5");
        priceP.innerHTML = bike.price;

        const ruppeSymbolP = document.createElement("p");
        ruppeSymbolP.classList.add("p");
        ruppeSymbolP.innerText = bike.ruppe_symbol;

        cardBodyDiv.appendChild(titleH4);
        cardBodyDiv.appendChild(textP);
        cardBodyDiv.appendChild(exShowroomP);
        cardBodyDiv.appendChild(priceP);

        const cardFooterDiv = document.createElement("div");
        cardFooterDiv.classList.add("card-footer", "text-right");

        const buyButton = document.createElement("button");
        buyButton.classList.add("btn", "btn-success");
        buyButton.innerText = "Buy Now";

        const addToCartButton = document.createElement("button");
        addToCartButton.classList.add("btn", "btn-primary", "ml-2");
        addToCartButton.innerText = "Add to Cart";

        buyButton.addEventListener("click", function () {
            alert(`Thank you for buying the ${bike.title}.\n Price: ${bike.price}`);
        });

        addToCartButton.addEventListener("click", function () {
            addToCart(bike);
        });

        cardFooterDiv.appendChild(buyButton);
        cardFooterDiv.appendChild(addToCartButton);

        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBodyDiv);
        cardDiv.appendChild(cardFooterDiv);

        colDiv.appendChild(cardDiv);

        if (bike.category === "Shotgun 650") {
            bikeList.appendChild(colDiv);
        } else if (bike.category === "Himalayan") {
            bikeList2.appendChild(colDiv);
        }
        else if (bike.category === "bullet350") {
            bikeList3.appendChild(colDiv);
        }
        else if (bike.category === "SuperMeteor650") {
            bikeList4.appendChild(colDiv);
        }
        else if (bike.category === "hunnter350") {
            bikeList5.appendChild(colDiv);
        }
        else if (bike.category === "scram411") {
            bikeList6.appendChild(colDiv);
        }
        else if (bike.category === "classic350") {
            bikeList7.appendChild(colDiv);
        }
        else if (bike.category === "meteor350") {
            bikeList8.appendChild(colDiv);
        }
        else if (bike.category === "interceptor650") {
            bikeList9.appendChild(colDiv);
        }
        else if (bike.category === "continental650") {
            bikeList10.appendChild(colDiv);
        }
       
        });

}
function filterBikes(searchValue) {
    const bikes = JSON.parse(localStorage.getItem("bikes")) || [];
    const filteredBikes = bikes.filter(bike => {
        return bike.category.toLowerCase().includes(searchValue);
    });

    clearBikeLists();
    renderBikes(filteredBikes);
}

function clearBikeLists() {
    const bikeLists = document.querySelectorAll("#bike-list, #bike-list2, #bike-list3, #bike-list4, #bike-list5, #bike-list6, #bike-list7, #bike-list8, #bike-list9, #bike-list10");
    bikeLists.forEach(list => {
        list.innerHTML = "";
    });
}

function renderBikes(filteredBikes) {
    filteredBikes.forEach(bike => {
        const colDiv = document.createElement("div");
        colDiv.classList.add("col-lg-6", "col-md-4", "col-sm-12", "mb-4");

        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");

        const img = document.createElement("img");
        img.classList.add("img-fluid", "card-img-top");
        img.src = bike.image;
        img.alt = "Product Image";

        const cardBodyDiv = document.createElement("div");
        cardBodyDiv.classList.add("card-body");

        const titleH4 = document.createElement("h4");
        titleH4.classList.add("card-title");
        titleH4.innerText = bike.title;

        const textP = document.createElement("p");
        textP.classList.add("card-text");
        textP.innerHTML = bike.text;

        const exShowroomP = document.createElement("p");
        exShowroomP.classList.add("h6");
        exShowroomP.innerText = bike.ex_showroom;

        const priceP = document.createElement("p");
        priceP.classList.add("card-text", "h5");
        priceP.innerHTML = bike.price;

        const ruppeSymbolP = document.createElement("p");
        ruppeSymbolP.classList.add("p");
        ruppeSymbolP.innerText = bike.ruppe_symbol;

        cardBodyDiv.appendChild(titleH4);
        cardBodyDiv.appendChild(textP);
        cardBodyDiv.appendChild(exShowroomP);
        cardBodyDiv.appendChild(priceP);

        const cardFooterDiv = document.createElement("div");
        cardFooterDiv.classList.add("card-footer", "text-right");

        const buyButton = document.createElement("button");
        buyButton.classList.add("btn", "btn-success");
        buyButton.innerText = "Buy Now";

        const addToCartButton = document.createElement("button");
        addToCartButton.classList.add("btn", "btn-primary", "ml-2");
        addToCartButton.innerText = "Add to Cart";

        buyButton.addEventListener("click", function () {
            alert(`Thank you for buying the ${bike.title}.\n Price: ${bike.price}`);
        });

        addToCartButton.addEventListener("click", function () {
            addToCart(bike);
        });

        cardFooterDiv.appendChild(buyButton);
        cardFooterDiv.appendChild(addToCartButton);

        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBodyDiv);
        cardDiv.appendChild(cardFooterDiv);

        colDiv.appendChild(cardDiv);

        const bikeList = document.getElementById(`bike-list`);
        bikeList.appendChild(colDiv);
    });
}

function addToCart(bike) {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingItem = cartItems.find(item => item.title === bike.title);

    if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
        bike.quantity = 1;
        cartItems.push(bike);
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    alert(`${bike.title} has been added to your cart.`);
}




