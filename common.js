let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const scrollmenu = document.querySelector('.scrollmenu');

    if (window.scrollY > lastScrollY) {
        scrollmenu.classList.add('show');
    } else {
        scrollmenu.classList.remove('show');
    }
    
    lastScrollY = window.scrollY;
});

function openMypage() {
    document.querySelector('.mypage').classList.add('active');
}

function closeMypage() {
    document.querySelector('.mypage').classList.remove('active');
}

document.querySelectorAll('.scrollToTop').forEach(button => {
    button.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


function openPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'flex'; 
    document.body.style.overflow = 'hidden';
}


function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';  
    document.body.style.overflowY = 'auto';
}

document.getElementById('popup').addEventListener('click', function(event) {
    if (event.target === this) { 
        closePopup();
    }
});



// 

const slider = document.querySelector('.picture_list');
const dots = document.querySelectorAll('.dot');
currentIndex = 0;
let currentTranslate = 0;
let prevTranslate = 0;

function updateSlider(index) {
    currentTranslate = -index * slider.offsetWidth;
    slider.style.transform = `translateX(${currentTranslate}px)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}


dots.forEach(dot => {
dot.addEventListener('click', () => {
    currentIndex = parseInt(dot.dataset.index);
    updateSlider(currentIndex);
    prevTranslate = currentTranslate;
    });
});

updateSlider(0);