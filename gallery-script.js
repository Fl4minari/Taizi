document.addEventListener("DOMContentLoaded", function () {
  const images = Array.from(document.querySelectorAll(".gallery-view-img"));
  const viewer = document.getElementById("photoViewer");
  const viewerImg = document.getElementById("viewerTargetImg");
  const closeBtn = document.querySelector(".close-viewer");
  const prevBtn = document.querySelector(".prev-arrow");
  const nextBtn = document.querySelector(".next-arrow");

  let currentIndex = 0;

  if (!viewer || !viewerImg) return;

  images.forEach((img, index) => {
    img.addEventListener("click", function (e) {
      e.stopPropagation();
      viewer.style.setProperty("display", "flex", "important");
      viewerImg.src = this.src;
      currentIndex = index;
    });
  });

  function showImage(index) {
    if (index < 0) {
      currentIndex = images.length - 1;
    } else if (index >= images.length) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }
    viewerImg.src = images[currentIndex].src;
  }

  prevBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    showImage(currentIndex - 1);
  });

  nextBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    showImage(currentIndex + 1);
  });

  document.addEventListener("keydown", function (e) {
    if (viewer.style.display === "flex") {
      if (e.key === "ArrowLeft") showImage(currentIndex - 1);
      if (e.key === "ArrowRight") showImage(currentIndex + 1);
      if (e.key === "Escape") closeViewerFunc();
    }
  });

  function closeViewerFunc() {
    viewer.style.display = "none";
  }

  closeBtn.addEventListener("click", closeViewerFunc);
  viewer.addEventListener("click", closeViewerFunc);
  viewerImg.addEventListener("click", (e) => e.stopPropagation());
});
