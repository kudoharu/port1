let currentIndex = 0;
const slides = document.querySelectorAll('.banner_image img');
const totalSlides = slides.length;

function showNextSlide() {

    slides.forEach((slide, index) => {
        slide.style.opacity = 0;
    });


    slides[currentIndex].style.opacity = 1;

    currentIndex = (currentIndex + 1) % totalSlides;
}


setInterval(showNextSlide, 3000);


showNextSlide();


let randomTime = Math.floor(Math.random() * (20 - 5 + 1)) + 5; 
let countdownTime = randomTime * 60; 

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${padTime(hours)}:${padTime(minutes)}:${padTime(secs)}`;
}

function padTime(num) {
    return num < 10 ? '0' + num : num;
}

function updateTimer() {
    const timerElement = document.getElementById('timer');
    timerElement.textContent = formatTime(countdownTime); 
}


function startCountdown() {
    const timerInterval = setInterval(() => {
        countdownTime--;
        updateTimer();


        if (countdownTime <= 0) {
            clearInterval(timerInterval);
            alert("Time out");
        }
    }, 1000); 
}


updateTimer();


startCountdown();




const list = document.querySelector('.slide_list');
const items = document.querySelectorAll('.slide_item');
const item = document.querySelector('.slide_item');
const buttons = document.querySelector('.buttons');
const paginations = document.querySelector('.paginations');
const lastIndex = items.length - 1;
let selected = 0;
let interval;

// Util Functions
const setTransition = (value) => {
    list.style.transition = value;
};

const setTranslate = ({ index, reset }) => {
    if (reset) list.style.transform = `translate(-${19.66}%, 0)`;
    else list.style.transform = `translate(-${(index) * 10 + 19.66}%, 0)`;
};

const activePagination = (index) => {
    [...paginations.children].forEach((pagination) => {
    pagination.classList.remove('on');
    });
    paginations.children[index].classList.add('on');
};

const handlePagination = (e) => {
    if (e.target.dataset.num) {
        selected = parseInt(e.target.dataset.num);
        setTransition('all 0.3s linear');
        setTranslate({ index: selected });
        activePagination(selected);
    }
};

const makePagination = () => {
    if (items.length > 1) {
        for (let i = 0; i < items.length; i++) {
        const button = document.createElement('button');
        button.dataset.num = i;
        button.classList.add('pagination');
        if (i === 0) {
            button.classList.add('on');
        }
        paginations.appendChild(button);
        paginations.addEventListener('click', handlePagination);
    }
    }
};
const cloneElement = () => {
    list.prepend(items[lastIndex-1].cloneNode(true),items[lastIndex].cloneNode(true));
    list.append(items[0].cloneNode(true),items[1].cloneNode(true),items[2].cloneNode(true));
    setTranslate({ reset: true });
};

const autoplayIterator = () => {
    selected += 1;
    setTransition('all 0.3s linear');
    setTranslate({ index: selected });
    if (selected > lastIndex) {
    activePagination(0);
    clearInterval(interval);
    setTimeout(() => {
        selected = 0;
        setTransition('');
        setTranslate({ reset: true });
        autoplay({ duration: 2000 });
    }, 300);
    }
    if (selected <= lastIndex) activePagination(selected);
};

const autoplay = ({ duration }) => {
    interval = setInterval(autoplayIterator, duration);
};



const render = () => {
    // makeButton();
    makePagination();
    cloneElement();
    autoplay({ duration: 2000 });
};
render();
