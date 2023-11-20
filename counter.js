let incrementButton = document.querySelector('#plus')
let decrementButton = document.querySelector('#minus')
let counter = document.querySelector('#counter')

let count = 0
counter.innerHTML = count;
console.log(count)



incrementButton.addEventListener('click',function(){
    count++;
    counter.innerHTML = count;
});

decrementButton.addEventListener('click',function(){
    count--;
    counter.innerHTML = count;
});



