// JavaScript Document


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
        entry.target.classList.add('show');
    } else {
        entry.target.classList.remove('show');
    }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// let valueDisplays = document.querySelectorAll(".number");
// let interval = 5000;

// valueDisplays.forEach ((valueDisplay) => {
//     let startValue = o;
//     let endValue = parseInt(valueDisplay.getAttribute
//     ("data-val"));
//     let duration = Math.floor(interval / endValue);
//     let counter = setInterval(function () {
//         startValue += 1;
//         valueDisplay.textContent = startValue;
//         if (startValue == endValue) {
//             clearInterval(counter);
//         }

//     }, duration);
// });

function countTo(){
    let from = 160000;
    let to = 168582;
    let step = to > from ? 1 : -1;
    let interval = -10000000000;

    if(from == to){
        document.querySelector(".number").textContent = from;
        return;
    }

    let counter = setInterval(function(){
        from += step;
        document.querySelector(".number").textContent = from;

        if(from == to){
            clearInterval(counter);
        }
    }, interval);
}
countTo();

const body = document.querySelector('body');
const openKnop = document.querySelector('nav:first-of-type img:last-of-type');
const sluitKnop = document.querySelector('nav:last-of-type img');
const hamburgermenuContent = document.querySelector('nav:last-of-type');

function openHamburger() {
    hamburgermenuContent.classList.add('open');
    body.classList.add('geenScroll');
}

openKnop.addEventListener("click", openHamburger)


function sluitHamburger() {
    hamburgermenuContent.classList.remove('open');
    body.classList.remove('geenScroll');
}

sluitKnop.addEventListener("click", sluitHamburger)