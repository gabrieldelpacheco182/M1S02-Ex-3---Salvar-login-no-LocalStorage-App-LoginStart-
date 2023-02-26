var userObj = {
  user: "adriana",
  password: "123",
};
localStorage.clear();
localStorage.setItem("userLocal", userObj.user);
localStorage.setItem("senhaLocal", userObj.password);
const userLocal = localStorage.getItem("userLocal");
console.log(userLocal);
const senhaLocal = localStorage.getItem("senhaLocal");
console.log(senhaLocal);
function login() {
  let user = document.getElementById("login").value;
  let password = document.getElementById("password").value;
  if (userLocal == user && senhaLocal == password) {
    alert("Você já esta logado.");
    location.href = "./logout.html";
  } else {
    alert("Usuario ou senha invelida, tente novamente.");
    location.href = "./index.html";
  }
}
function logout() {
  location.href = "./index.html";
}
