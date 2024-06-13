document.querySelector(".submit").addEventListener("click", function () {
  const changeName = document.querySelector(".msg").value;

  document.querySelector(".name").textContent = changeName;
});
