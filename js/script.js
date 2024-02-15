
// root funciton for popup image when hover

// function showImage(elemId, imgSrc) {
//   const elem = document.getElementById(elemId);
//   const popImage = new Image();
//   popImage.src = imgSrc;
//   popImage.style.position = "absolute";
//   popImage.style.height = "30vw"
//   popImage.style.zIndex = "-9999";
//   elem.appendChild(popImage);
// }

// function hideImage(elemId) {
//   const elem = document.getElementById(elemId);
//   while (elem.childElementCount > 0) {
//     elem.removeChild(elem.lastChild);
//   }
// }

// add this for loader animation to dissapper after DOMloading completed

// const splash = document.querySelector('.splash');

// document.addEventListener('DOMContentLoaded', (e) => {
//     setTimeout(() => {
//         splash.classList.toggle('opacity-none');
//         setTimeout(() => {
//             splash.classList.toggle('display-none');
//         }, 500);
//     }, 2000);
// });