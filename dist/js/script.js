const hamburger = document.querySelector(".ri-menu-3-line");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("menu-active");
});

// Filter Image
const btnFilter = document.querySelectorAll(".produk-box ul li");
const imgItem = document.querySelectorAll(".produk-list img");

btnFilter.forEach((data) => {
  // Button Active
  data.onclick = () => {
    btnFilter.forEach((data) => {
      data.className = "";
    });
    data.className = "active";

    // Filter Image
    // console.log(data.textContent);
    const btnText = data.textContent;
    imgItem.forEach((img) => {
      img.style.display = "none";
      if (img.getAttribute("data-filter") == btnText.toLowerCase() || btnText == "All Produk") {
        img.style.display = "block";
      }
    });
  };
});

window.onscroll = () => {
  menu.classList.remove("menu-active");
};
