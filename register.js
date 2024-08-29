let userName = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let signup = document.getElementById("sign-Up");
signup.addEventListener("click", function (e) {
  e.preventDefault();
  if (userName.value === "" || email.value === "") {
    alert("Data not vailed");
  } else {
    let datalist = [
      {
        id: userName.value,
        email: email.value,
        password: password.value,
      },
    ];
    localStorage.setItem("datalist", JSON.stringify(datalist));
    setTimeout(() => {
      window.location.href = "login.html";
      userName.value = "";
      email.value = "";
      password.value = "";
    }, 2000);
  }
});
