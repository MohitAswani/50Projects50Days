// This will put all the elements with the class in a node list.
const panels=document.querySelectorAll('.panel');

panels.forEach(panel=>{
    panel.addEventListener('click',()=>{
        removeActiveClasses();
        panel.classList.add('active');
    });
});

const removeActiveClasses=()=>{
    panels.forEach(panel=>{
        panel.classList.remove('active');
    });
};