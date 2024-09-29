
let userdetails = JSON.parse(localStorage.getItem("users"));
let isLogin = localStorage.getItem("isLogin") || false;
if (!isLogin) {
    alert("sign In")

    window.location.href = "/Pages/signUp.html";

}
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', function () {
        const card = button.closest('.card');
        const title = card.querySelector('.card-title').innerText;
        const text = card.querySelector('.card-text').innerText;
        const ruppe_symbole=card.querySelector('p').innerText
        const price = card.querySelector('.h5').innerHTML;
        const ex_showroom =card.querySelector('.h6').innerText;
        const image = card.querySelector('img').src;
        const category = card.dataset.category;

        const product = { title, text, ruppe_symbole, price,ex_showroom, image, category };

        let bikes = JSON.parse(localStorage.getItem("bikes")) || [];
        bikes.push(product);
        localStorage.setItem("bikes", JSON.stringify(bikes));
        alert(`${title} Added to Shopping Page. \n Price :- ${price}`);
        // window.location.href="/Pages/cart.html"
    });
});

document.querySelectorAll('.remove-btn').forEach(button => {
    button.addEventListener('click', function () {
        const card = button.closest('.card');
        const title = card.querySelector('.card-title').innerText;

        let bikes = JSON.parse(localStorage.getItem("bikes")) || [];
        bikes = bikes.filter(bike => bike.title !== title);
        localStorage.setItem("bikes", JSON.stringify(bikes));
        alert(`${title} Removed from Shopping page`);
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.getElementById("searchForm");
    const searchInput = document.querySelector("[data-search]");
    const cards = document.querySelectorAll(".card");

    const performSearch = (searchTerm) => {
        searchTerm = searchTerm.toLowerCase();
        cards.forEach(card => {
            const isVisible = card.dataset.category.toLowerCase().includes(searchTerm);
            card.classList.toggle("hide", !isVisible);
        });
    };

    searchForm.addEventListener("submit", e => {
        e.preventDefault();
        performSearch(searchInput.value);
    });

    searchInput.addEventListener("input", () => {
        performSearch(searchInput.value);
    });
});