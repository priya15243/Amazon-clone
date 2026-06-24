const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');

let n = 1;

// Slide change function
function changeSlide() {

    // Sab images hide karo
    imgs.forEach((img) => {
        img.style.display = 'none';
    });

    // Last image ke baad first image
    if (n > imgs.length) {
        n = 1;
    }

    // First image se pehle last image
    if (n < 1) {
        n = imgs.length;
    }

    // Current image show karo
    imgs[n - 1].style.display = 'block';
}

// Next button
next_btn.addEventListener('click', () => {
    n++;
    changeSlide();
});

// Previous button
prev_btn.addEventListener('click', () => {
    n--;
    changeSlide();
});


const scrollContainer=document.querySelectorAll('products');
for(const item of scrollContainer)
{
    item.addEventListener('wheel',(evt)=>
    {
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    });
}