$(function () {
  $("#registerUser").click(postRegistration);
  $("#loginButton").click(shiftPage);
});

function postRegistration() {
  let name = $("#regName").val();
  let email = $("#regEmail").val();
  let phone = $("#regMobile").val();
  let password = $("#regPassword").val();

  let obj = {
    name: name,
    email: email,
    phone: phone,
    password: password,
  };

  console.log(" Comments hits");
  $.ajax({
    url: "http://localhost:8080/user//signUp",
    method: "POST",
    data: obj,
    success: function (response) {
      alert("User registered");
      clearvalues();
    },
    error: function (xhr, ajaxOptions, thrownError) {
      alert("Error " + xhr.status);
    },
  });
}

function clearvalues() {
  $("#regName").val("");
  $("#regEmail").val("");
  $("#regPhone").val("");
  $("#regPassword").val("");
}

function shiftPage() {
  console.log("Event hits");
  window.location.href="../index.html"
}
