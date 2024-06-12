// let slider = document.querySelector("#slider-container");
let prevBtn = document.querySelector("#orev");
let nextBtn = document.querySelector("#next");
let sliderImages = document.querySelector("#slider-image");
let sliderImages2 = document.querySelector("#slider-image");

let currentIndex = 0;
// let imageWidth = sliderImages[0];


prevBtn.addEventListener("click", function () {
    let left= currentIndex+=110;
    sliderImages.style.marginLeft= left+"px";
});

nextBtn.addEventListener("click", function () {
    let left= currentIndex-=110;
    sliderImages2.style.marginLeft= left+"px";
});

// let star  = document.querySelector(".stars i");
// star.forEach((star, index) =>{
//     star.addEventListener("click",() => {
//         let rating = index + 1;
//         setRating(rating);
//     });
// });



//     if (rating === 1) {
//         message.textContent = "Poor";
//     } 
    
//     else if (rating === 2) {
//         message.textContent = "Fair";
//     }
    
//     else if (rating === 3) {
//         message.textContent = "Good";
//     }

//     else if (rating === 4) {
//         message.textContent = "Very Good";
//     }

//     else if (rating === 5) {
//         message.textContent = "Excellent";
//     }

//     else {
//         message.textContent = "";
//     };

