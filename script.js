// Function to handle dropdown menu interactions
function handleDropdown(event) {
  // Get the dropdown element by its ID
  var dropdown = document.getElementById("dropDownContent");

  // Check if the clicked element has the class "menuBtn"
  if (event.target.matches(".menuBtn")) {
    // Toggle the "show" class on the dropdown element
    dropdown.classList.toggle("show");
  } else {
    // If the clicked element does not have the class "menuBtn"
    // Close any open dropdowns by iterating through elements with class "dropDownContent"
    var dropdowns = document.getElementsByClassName("dropDownContent");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      // Check if the current dropdown has the class "show"
      if (openDropdown.classList.contains("show")) {
        // Remove the "show" class to hide the dropdown
        openDropdown.classList.remove("show");
      }
    }
  }
}

// Add event listener to handle dropdown menu interactions
document.addEventListener("click", handleDropdown);
// Initialize slideIndex and display the first set of slides
let slideIndex = 1;
showSlides(slideIndex);
// Add event listeners to previous and next buttons to navigate through slides
document
  .querySelector(".prevBtn")
  .addEventListener("click", () => plusSlides(-1));
document
  .querySelector(".nextBtn")
  .addEventListener("click", () => plusSlides(1));
// Add event listeners to dots to navigate to specific slides
document.querySelectorAll(".dot").forEach((dot, index) => {
  dot.addEventListener("click", () => currentSlide(index + 1));
});
// Function to navigate to the previous or next slide
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("oneSlide");
  slideIndex = n > slides.length ? 1 : n < 1 ? slides.length : n;

  Array.from(slides).forEach((slide, i) => {
    slide.style.display = i === slideIndex - 1 ? "flex" : "none";
  });

  let dots = document.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === slideIndex - 1);
  });
}
// Alternative version of showSlides function with traditional for loops
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("oneSlide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}
// Automatic slideshow with setInterval
setInterval(function () {
  plusSlides(1);
}, 3000);

document.addEventListener("DOMContentLoaded", function () {
  // Get all elements with the class "questionBtn"
  var questionBtns = document.querySelectorAll(".questionBtn");

  // Add click event listener to each questionBtn
  questionBtns.forEach(function (questionBtn) {
    questionBtn.addEventListener("click", function () {
      // Close all answers
      questionBtns.forEach(function (btn) {
        var answer = btn.nextElementSibling;
        if (btn !== questionBtn) {
          btn.classList.remove("open");
          answer.style.display = "none";
          btn.style.borderBottom = "1px solid rgb(58, 58, 58)";
        }
      });

      // Toggle the "open" class to show/hide the answer
      questionBtn.classList.toggle("open");

      // Find the corresponding answer element
      var answer = questionBtn.nextElementSibling;

      // Toggle the display of the answer
      if (answer.style.display === "block" || answer.style.display === "") {
        answer.style.display = "none";
        questionBtn.style.borderBottom = "1px solid rgb(58, 58, 58)";
      } else {
        answer.style.display = "block";
        questionBtn.style.borderBottom = "none";
      }
    });
  });
});
