var imgs = Array.from(document.querySelectorAll(`.item img`));
var lightBoxContainer = document.querySelector(`.lightBoxContainer`);
var lightBox = document.querySelector(`.lightBox`);
var close = document.querySelector(`#exit`);
var next = document.querySelector(`#next`);
var prev = document.querySelector(`#prev`);

var currentIndex;

// Add click event listener to each image
for (var i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener(`click`, (e) => {
    var mySource = e.target.getAttribute(`src`);
    console.log(mySource);
    
    lightBoxContainer.classList.remove(`d-none`);
    lightBox.style.cssText = `
        background-image: url(${mySource});`;
    
    
    currentIndex = imgs.indexOf(e.target);
  });
}

// Close button functionality
close.addEventListener(`click`, () => {
  lightBoxContainer.classList.add(`d-none`);
});

// Function to handle sliding through images
function slide(step) { //step = 1 for next, -1 for prev
    currentIndex += step;

    if(currentIndex == imgs.length )
        currentIndex = 0;

    if(currentIndex == -1)
        currentIndex = imgs.length - 1;

    var nextSrc = imgs[currentIndex].getAttribute(`src`);
    lightBox.style.cssText = `
    background-image: url(${nextSrc});`;

}

// Next button functionality
next.addEventListener(`click`, () =>{
    slide(1);
});

// Previous button functionality
prev.addEventListener(`click`, () => {
    slide(-1);
});


// Close lightbox when clicking outside the image
lightBoxContainer.addEventListener(`click`, (e) => {
    if (e.target === lightBoxContainer) {
        lightBoxContainer.classList.add(`d-none`);
    }
});


// Add keyboard navigation
document.addEventListener(`keydown`, (e) => {
    if (e.key === `Escape`) {
        lightBoxContainer.classList.add(`d-none`);
    } else if (e.key === `ArrowRight`) {
        slide(1);
    } else if (e.key === `ArrowLeft`) {
        slide(-1);
    }
});
