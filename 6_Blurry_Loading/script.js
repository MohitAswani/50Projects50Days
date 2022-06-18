const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

// 30 ms
let int = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    // clearInterval makes the interval stop.
    clearInterval(int);
  }

  loadText.innerHTML = `${load}%`;

  // We use the scale function to scale the opacity from 1 to 0 as the load goes from 0 to 100.
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter=`blur(${scale(load,0,100,10,0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
