let slider_left = document.querySelector('.slider_left'),
    slider_right = document.querySelector('.slider_right'),
    left = 0;

slider_left.addEventListener('click',function(event){
    let slide_l = document.querySelector('.slider_content');
    slide_l.classList.add('slider_content');
    left = left - 1280;
    if (left < -5120) left = 0;
   
    slide_l.style.left = left + 'px';
})

slider_right.addEventListener('click',function(event){
    let slide_r = document.querySelector('.slider_content');
    left = left + 1280;
    if (left > 0) left = -5120;
    slide_r.style.left = left + 'px';
})