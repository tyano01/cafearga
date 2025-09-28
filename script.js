// گرفتن دکمه
let scrollBtn = document.getElementById("scrollBtn");
let scrollAnimation; // نگه داشتن انیمیشن برای کنسل کردنش

// وقتی کاربر 200px اسکرول کرد، دکمه ظاهر شه
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

// اسکرول نرم به بالا
function topFunction() {
  cancelAnimationFrame(scrollAnimation); // اگه قبلا اجرا شده بود، قطع کن

  function smoothScroll() {
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > 0) {
      scrollAnimation = requestAnimationFrame(smoothScroll);
      window.scrollTo(0, currentScroll - currentScroll / 25);
    }
  }

  smoothScroll();
}

// اگه کاربر وسط راه اسکرول یا کلیک کرد → انیمیشن قطع شه
window.addEventListener("wheel", () => cancelAnimationFrame(scrollAnimation), { passive: true });
window.addEventListener("touchstart", () => cancelAnimationFrame(scrollAnimation), { passive: true });
