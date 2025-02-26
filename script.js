let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");

let bg = document.getElementById("main");

let heading = document.getElementById("heading");

rgb1 = "#000";
rgb2 = "#fff";

addColor = () => {
  let hex = "0123456789ABCDEF";
  data = "#";
  for (let i = 0; i < 6; i++) {
    data = data + hex[Math.floor(Math.random() * 16)];
  }
  return data;
};

const handlebutton1 = () => {
 rgb1 = addColor();
  btn1.innerHTML = rgb1;
  btn1.style.backgroundColor = rgb1;
  bg.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
  heading.innerHTML = `linear-gradient(to right, ${rgb1}, ${rgb2})`
  console.log(rgb1);
};

const handlebutton2 = () => {
  rgb2 = addColor();
  btn2.innerHTML = rgb2;
  btn2.style.backgroundColor = rgb2;
  bg.style.backgroundImage = `linear-gradient(to right,${rgb1}, ${rgb2})`;
  heading.innerHTML = `linear-gradient(to right, ${rgb1}, ${rgb2})`
  console.log(rgb2);
};

btn1.addEventListener("click", handlebutton1);
btn2.addEventListener('click', handlebutton2);