document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: { slidesPerView: 1 },
      1024: { slidesPerView: 3 },
    },
   
  });
});
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 100) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});



const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 20,
  virtual: true, 
});
 const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  // Create X button inside the dropdown
  const closeBtn = document.createElement("button");
  closeBtn.innerHTML = "✕";
  closeBtn.className =
    "text-white text-3xl absolute top-4 right-6 md:hidden";
  mobileMenu.appendChild(closeBtn);

  // Open mobile menu
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // Close with the X button
  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    const clickedInsideMenu = mobileMenu.contains(e.target);
    const clickedHamburger = menuBtn.contains(e.target);

    if (!clickedInsideMenu && !clickedHamburger) {
      mobileMenu.classList.add("hidden");
    }
  });