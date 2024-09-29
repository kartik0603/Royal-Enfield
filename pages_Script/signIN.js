let userdetail = JSON.parse(localStorage.getItem("users"));
let isLogin = localStorage.getItem("isLogin") || false;
// if (!isLogin) {
//   alert("sign In");
//   window.location.href = "/Pages/signIn.html";
// }
document
  .getElementById("register-form")
  .addEventListener("submit", handleLogin);
let userdetails = JSON.parse(localStorage.getItem("users"));
document.getElementById("navbarContainer").innerHTML = navbar_RE();

function handleLogin(event) {
  event.preventDefault();
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const useremail = document.getElementById("email").value;
  const userpassword = document.getElementById("password").value;
  const validUser = users.find(
    (user) => user.email === useremail && user.password === userpassword
  );

  if (validUser) {
    localStorage.setItem("loggedInUser", JSON.stringify(validUser));
    document.getElementById("login-message").innerHTML = "Login Successful";
    setTimeout(() => {
      window.location.href = "/index.html";
      localStorage.setItem("isLogin", true);
      document.getElementById("navbar").innerHTML = navbar_RE(
        "logout",
        userdetails.email
      );
      // document.getElementById("navbar").innerHTML = navbar_RE("logout", userdetails.email)
    }, 1000);
  } else {
    document.getElementById("login-message").innerHTML =
      "Invalid Email or Password";
  }
}
