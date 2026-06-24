document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".category-filter-btn");
  const dishes = document.querySelectorAll(".dish-card");

  const priceRange = document.getElementById("priceRange");
  const priceValue = document.getElementById("priceValue");
  const weightRange = document.getElementById("weightRange");
  const weightValue = document.getElementById("weightValue");

  let activeCategories = [];

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.getAttribute("data-category");

      if (activeCategories.includes(category)) {
        activeCategories = activeCategories.filter((cat) => cat !== category);
        this.classList.remove("active-filter");
      } else {
        activeCategories.push(category);
        this.classList.add("active-filter");
      }

      filterMenu();
    });
  });

  priceRange.addEventListener("input", function () {
    priceValue.textContent = this.value;
    filterMenu();
  });

  weightRange.addEventListener("input", function () {
    weightValue.textContent = this.value;
    filterMenu();
  });

  function filterMenu() {
    const maxPrice = parseInt(priceRange.value);
    const maxWeight = parseInt(weightRange.value);

    dishes.forEach((dish) => {
      const dishCategory = dish.getAttribute("data-category");
      const dishPrice = parseInt(dish.getAttribute("data-price"));
      const dishWeight = parseInt(dish.getAttribute("data-weight"));

      const matchCategory =
        activeCategories.length === 0 ||
        activeCategories.includes(dishCategory);
      const matchPrice = dishPrice <= maxPrice;
      const matchWeight = dishWeight <= maxWeight;

      if (matchCategory && matchPrice && matchWeight) {
        dish.style.display = "flex";
      } else {
        dish.style.display = "none";
      }
    });
  }
});
