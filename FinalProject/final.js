setInterval(() => toggleImage(), 4000);

let currentIndex = 0;

let images = [
  "../images/rsz_man-and-woman-lying-on-a-bed-of-flowers-2871648.jpg",
  "../images/rsz_man-and-woman-holding-lights-while-kissing-3014859.jpg",
  "../images/rsz_man-and-woman-standing-beside-carriage-3204420.jpg",
  "../images/rsz_grayscale-photo-of-newly-wed-2209416.jpg",
];

function toggleImage() {
  html = `<img src="${images[currentIndex++ % images.length]}">`;
  // console.log(currentIndex);
  $("#slideshow").html(html);
}
