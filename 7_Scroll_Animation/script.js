const boxes = document.querySelectorAll(".box");

const checkBoxes = () => {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach(box=>{

    // This method returns the dom rect object. It basically describes the size and position of a rectangle.

    // It returns a DOMRect object providing information about the size of an element and its position relative to the viewport.

    const boxTop=box.getBoundingClientRect().top;

    // If the top which is the position of div's top is less than triggerBottom which is the height of bottom of the browser then we add the class of show to the  div.

    if(boxTop<triggerBottom){
        box.classList.add('show');
    }
    else{
        box.classList.remove('show');
    }
  });
};

// Adding a event listener to scroll on window

window.addEventListener("scroll", checkBoxes);
