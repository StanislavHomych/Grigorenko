document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const menu = document.querySelector(".menu");
    const imageButton = document.querySelector(".buttonImage")
  
    // Функція для відкриття меню
    function openMenu() {
      menu.style.left = "0";
      imageButton.src = "./assets/close.png"

    }
  
    // Функція для закриття меню
    function closeMenu() {
      menu.style.left = "-500px"; /* Змініть відстань, на яку приховується меню */
      imageButton.src = "./assets/menu.png"

    }
  
    // Додаємо обробники подій
    menuButton.addEventListener("click", function () {
      if (menu.style.left === "0px") {
        closeMenu(); // Закрити меню, якщо воно відкрите
      } else {
        openMenu(); // Відкрити меню, якщо воно закрите
      }
    });
  
    // Закриваємо меню при кліку на посилання
    const menuLinks = document.querySelectorAll(".menu_element");
    menuLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        closeMenu();
      });
    });
  });
  