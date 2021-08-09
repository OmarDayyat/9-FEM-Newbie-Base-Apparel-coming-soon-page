const email = document.getElementById("email");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");
const errorImage = document.querySelector(".error-image");

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', (e) => {
  let msgs = [];

  if (email.value === '' || email.value == null) {
    msgs.push('Email is required')
    errorImage.classList.add("show");
  }

  else if (!email.value.match(regex)) {
    msgs.push(' Please provide a vaild email');
    errorImage.classList.add("show");
  }

  if (msgs.length > 0) {
    e.preventDefault();
    errorElement.innerText = msgs.join(',')

  }
  console.log(msgs)
})