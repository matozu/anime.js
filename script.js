const menu = document.getElementById("menu");
var hamSpan1 = document.querySelector(".span-1");
var hamSpan2 = document.querySelector(".span-2");
var hamSpan3 = document.querySelector(".span-3");
var hamSpan4 = document.querySelector(".span-4");

var isMenuOpen = false;
var isAnimationInProgress = false;

Array.from(document.getElementsByClassName("menu-item")).forEach(
  (item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;
    };
  }
);

function animateMenu() {
  if (!isAnimationInProgress) {
    isAnimationInProgress = true;

    if (isMenuOpen) {
      anime({
        targets: ".menu-item",
        translateX: [0, -1000],
        duration: 3000,
        delay: anime.stagger(100),
        complete: function () {
          isMenuOpen = false;
          isAnimationInProgress = false;
          transformHamSpan(false);
        },
      });
    } else {
      anime({
        targets: ".menu-item",
        translateX: [-1000, 0],
        duration: 3000,
        delay: anime.stagger(100),
        complete: function () {
          isMenuOpen = true;
          isAnimationInProgress = false;
          transformHamSpan(true);
        },
      });
    }
  }
}

function transformHamSpan(isTransformed) {
  if (isTransformed) {
    hamSpan3.style.transform = "rotate(45deg)";
    hamSpan2.style.transform = "rotate(-45deg)";
    hamSpan3.style.top = "50%";
    hamSpan2.style.top = "50%";
    hamSpan1.style.transform = "scale(0)";
    hamSpan4.style.transform = "scale(0)";
  } else {
    hamSpan3.style.transform = "rotate(0deg)";
    hamSpan2.style.transform = "rotate(0deg)";
    hamSpan3.style.top = "66%";
    hamSpan2.style.top = "33%";
    hamSpan1.style.transform = "scale(1)";
    hamSpan4.style.transform = "scale(1)";
  }
}

document.querySelector(".ham-menu").addEventListener("click", function () {
  animateMenu();
});
