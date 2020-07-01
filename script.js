let slider_left = document.querySelector('.slider_left'),
    slider_right = document.querySelector('.slider_right'),
    left = 0,
    width = screen.width,
    slider_content = document.querySelector('.slider_content');
    slide = [];

function addSlide(){
        slide.push(document.querySelector('.slide1'));
        slide.push(document.querySelector('.slide2'));
        slide.push(document.querySelector('.slide3'));
        slide.push(document.querySelector('.slide4'));
        slide.push(document.querySelector('.slide5'));
    
        for (let i = 0; i < slide.length; i++) {
            slide[i].style.width = width + 'px';
        };
};
    
addSlide();

let slider_width = width * 5;
slider_content.style.width = slider_width + 'px';


slider_left.addEventListener('click',function(event){
    left = left - width;
    if (left < -(slider_width - width)) left = 0;
    slider_content.style.left = left + 'px';
});

slider_right.addEventListener('click',function(event){
    left = left + width;
    if (left > 0) left = -(slider_width - width);
    slider_content.style.left = left + 'px';
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
});
