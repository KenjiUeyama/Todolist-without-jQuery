const ul = document.querySelector('ul');
const input = document.querySelector('input');
// const button = document.querySelector('button');
input.addEventListener('keydown', (event)=>{
    if (event.key === 'Enter') {
    const newLI = document.createElement('li');
    const newTodo = input.value;
    console.log(newTodo);
    if(!newTodo ==""){
        newLI.innerHTML = `<span><i class="fas fa-trash-alt"></i></span> ${newTodo}`
        ul.append(newLI);
        event.preventDefault();
        // delete input value after clicking
        input.value = "";
    }
    else {
        alert(`You must type in something and hit Enter`);
        event.preventDefault();
    }
   
    lineThroughAndDelete()
    }
    
});
function lineThroughAndDelete(){
    const li = document.querySelectorAll('li');
    // each list element is grayed and line-throughed when clicked.
    for (let i = 0; i < li.length; i++){
        li[i].addEventListener('click', ()=>{
            li[i].classList.toggle('color');
            }); 
    }

    const span = document.querySelectorAll('span');
    // each list element is removed when X is clicked.
    for (let i = 0; i < span.length; i++){
        span[i].addEventListener('click', (event)=>{
            // list element is faded out when X is clicked
            const fadeEffect = setInterval(() => {
                if (!span[i].parentElement.style.opacity) {
                    span[i].parentElement.style.opacity = 1;
                }
                if (span[i].parentElement.style.opacity > 0) {
                    span[i].parentElement.style.opacity -= 0.1;
                } else {
                    clearInterval(fadeEffect);
                }
            }, 50);
            // list element is then removed
            setTimeout(() => {
                span[i].parentElement.remove()
            }, 700);
            
            event.stopPropagation();
        }); 
        
    } 
    
}

lineThroughAndDelete()


const icon = document.querySelector(".fa-plus");
icon.addEventListener('click', ()=>{
    input.classList.toggle('input');
    
})





