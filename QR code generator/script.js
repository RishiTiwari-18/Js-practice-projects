let input = document.querySelector("input");
let button = document.querySelector("button");
let img = document.querySelector("img");

button.addEventListener("click", function generate() {
  if (input.value === "") {
    alert("Please Enter a text");
  } else {
    img.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      input.value;
  }
});
