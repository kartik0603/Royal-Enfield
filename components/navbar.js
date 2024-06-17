// components/navbar.js
const navbar_RE = () => {
  return `   <nav class="navbar navbar-expand-lg bg-black position-fixed z-3 w-100" id="navbar_RE">
      <div class="container-fluid ">
          <a class="navbar-brand" href="/index.html">
              <img src="../Images/RE nav logo.png" alt="Logo" width="150" height="26" class="d-inline-block align-text-top ms-4">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-5">

              <li class="nav-item">
                      <!-- <a class="nav-link" style="font-size: 16px; font-weight: 600; color: white;" href="index.html">Home</a> -->
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" style="font-size: 16px; font-weight: 600; color: white;" href="/Pages/addProducts.html">Motorcycles</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" style="font-size: 16px; font-weight: 600; color: white;" href="/Pages/products.html">Shop</a>
                  </li>
                  
                  <li class="nav-item">
                      <a class="nav-link" style="font-size: 16px; font-weight: 600; color: white;" href="/Pages/signIn.html">Sign In</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" style="font-size: 16px; font-weight: 600; color: white;" href="/Pages/signUp.html">Sign Up</a>
                  </li>
              </ul>
          </div>
      </div>
      
  </nav> `;
};

export default navbar_RE;
