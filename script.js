let slider_left = document.querySelector('.slider_left'),
    slider_right = document.querySelector('.slider_right'),
    left = 0;

slider_left.addEventListener('click',function(event){
    let slide_l = document.querySelector('.slider_content');
    slide_l.classList.add('slider_content');
    left = left - 1280;
    if (left < -5120) left = 0;
   
    slide_l.style.left = left + 'px';
});

slider_right.addEventListener('click',function(event){
    let slide_r = document.querySelector('.slider_content');
    left = left + 1280;
    if (left > 0) left = -5120;
    slide_r.style.left = left + 'px';
});

let carousel_left = document.querySelector('.carousel_left'),
    carousel_right = document.querySelector('.carousel_right'),
    move = 0;

carousel_left.addEventListener('click',function(event){
    let carousel_l = document.querySelector('.carousel_content');
    move = move - 128;
    if (move < -768) move = 0;
    carousel_l.style.left = move + 'px';
});

carousel_right.addEventListener('click',function(event){
    let carousel_l = document.querySelector('.carousel_content');
    move = move + 128;
    if (move > 0) move = -768;
    carousel_l.style.left = move + 'px';
})