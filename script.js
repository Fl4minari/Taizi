document.addEventListener("DOMContentLoaded", function () {
  // --- ГАЛЕРЕЯ (3-й экран) ---
  const galleryImages = document.querySelectorAll(".gallery-main-img");
  const galleryPrev = document.querySelector(".gallery-left-block .arrow-left");
  const galleryNext = document.querySelector(
    ".gallery-left-block .arrow-right",
  );
  let galleryIndex = 0;

  function changeGalleryImage(index) {
    if (galleryImages.length === 0) return;
    galleryImages[galleryIndex].classList.remove("active");
    galleryIndex = index;
    galleryImages[galleryIndex].classList.add("active");
  }

  if (galleryNext && galleryPrev) {
    galleryNext.addEventListener("click", function () {
      let next = galleryIndex + 1;
      if (next >= galleryImages.length) next = 0;
      changeGalleryImage(next);
    });

    galleryPrev.addEventListener("click", function () {
      let prev = galleryIndex - 1;
      if (prev < 0) prev = galleryImages.length - 1;
      changeGalleryImage(prev);
    });
  }

  // --- МЕНЮ (4-й экран) ---
  const menuImages = document.querySelectorAll(".menu-main-img");
  const menuPrev = document.querySelector(".menu-prev-btn");
  const menuNext = document.querySelector(".menu-next-btn");
  let menuIndex = 0;

  function changeMenuImage(index) {
    if (menuImages.length === 0) return;
    menuImages[menuIndex].classList.remove("active");
    menuIndex = index;
    menuImages[menuIndex].classList.add("active");
  }

  if (menuNext && menuPrev) {
    menuNext.addEventListener("click", function () {
      let next = menuIndex + 1;
      if (next >= menuImages.length) next = 0;
      changeMenuImage(next);
    });

    menuPrev.addEventListener("click", function () {
      let prev = menuIndex - 1;
      if (prev < 0) prev = menuImages.length - 1;
      changeMenuImage(prev);
    });
  }

  // --- УСЛУГИ (5-й экран) ---
  const servicesImages = document.querySelectorAll(".services-main-img");
  const servicesPrev = document.querySelector(".services-prev-btn");
  const servicesNext = document.querySelector(".services-next-btn");
  let servicesIndex = 0;

  function changeServicesImage(index) {
    if (servicesImages.length === 0) return;
    servicesImages[servicesIndex].classList.remove("active");
    servicesIndex = index;
    servicesImages[servicesIndex].classList.add("active");
  }

  if (servicesNext && servicesPrev) {
    servicesNext.addEventListener("click", function () {
      let next = servicesIndex + 1;
      if (next >= servicesImages.length) next = 0;
      changeServicesImage(next);
    });

    servicesPrev.addEventListener("click", function () {
      let prev = servicesIndex - 1;
      if (prev < 0) prev = servicesImages.length - 1;
      changeServicesImage(prev);
    });
  }
  // --- ИНТЕРАКТИВНЫЙ КАЛЕНДАРЬ (6-й экран) ---
  const calendarDaysContainer = document.getElementById("calendarDays");
  const timeSlotsContainer = document.getElementById("timeSlotsContainer");
  const selectedDateInput = document.getElementById("selectedDate");
  const selectedTimeInput = document.getElementById("selectedTime");
  const timeButtons = document.querySelectorAll(".time-btn");

  if (calendarDaysContainer) {
    const totalDays = 30;

    for (let i = 1; i <= totalDays; i++) {
      const dayElement = document.createElement("div");
      dayElement.classList.add("calendar-day");
      dayElement.textContent = i;
      dayElement.setAttribute("data-date", `2026-06-${i < 10 ? "0" + i : i}`);

      dayElement.addEventListener("click", function () {
        const previousSelected = calendarDaysContainer.querySelectorAll(
          ".calendar-day.selected",
        );
        previousSelected.forEach((day) => {
          day.classList.remove("selected");
        });

        dayElement.classList.add("selected");

        if (selectedDateInput) {
          selectedDateInput.value = dayElement.getAttribute("data-date");
        }

        if (selectedTimeInput) {
          selectedTimeInput.value = "";
        }
        timeButtons.forEach((b) => b.classList.remove("selected"));

        if (timeSlotsContainer) {
          timeSlotsContainer.style.display = "block";
        }
      });

      calendarDaysContainer.appendChild(dayElement);
    }
  }

  timeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      timeButtons.forEach((b) => b.classList.remove("selected"));
      button.classList.add("selected");
      if (selectedTimeInput) {
        selectedTimeInput.value = button.getAttribute("data-time");
      }
    });
  });

  const bookingform = document.getElementById("bookingform");
  const successmessage = document.getElementById("successMessage");

  if (bookingform && successmessage) {
    bookingform.addEventListener("submit", function (event) {
      event.preventDefault();

      bookingform.style.display = "none";

      successmessage.style.display = "block";
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const homeHeader = document.querySelector(".home-header");

  if (homeHeader) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 120) {
        homeHeader.classList.add("visible");
      } else {
        homeHeader.classList.remove("visible");
      }
    });
  }
});
