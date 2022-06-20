const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  // We turn the label into an array of spans so that we can add different transition delays. And then we simply join the array to convert it into a string.
  label.innerHTML = label.innerText
    .split('')
    .map((letter, index) => {
      return `<span style="transition-delay:${50*index}ms">${letter}</span>`;
    })
    .join('');
});
