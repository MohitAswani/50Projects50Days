const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click',()=>{

    // This will toggle a class
    search.classList.toggle('active');

    input.focus();
})