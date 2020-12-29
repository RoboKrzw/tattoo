let left = document.getElementById('leftlion');
let right = document.getElementById('rightlion');
let span = document.getElementById('spanlion');
let about = document.getElementById('about');

let explore = $('#banner').css("height");
$(function(){
    
    $( window ).on("resize", function() {
       explore = $('#banner').css("height");
    });
});
console.log(parseInt(explore));


window.addEventListener('scroll', function(){
    let scroll = window.pageYOffset;
    
console.log(parseInt(scroll));
    let speed = left.dataset.speed;
    // let scale = span.dataset.scale;
    // let speed1 = span.dataset.speed1;
    left.style.transform = `translateY(${(parseInt(explore) - scroll) * speed}px)`;
    right.style.transform = `translateY(${(parseInt(explore) - scroll) * speed}px)`;
    // span.style.transform = `scale(${scroll * scale +1}, ${scroll * scale +1})`;
    // span.style.transform += `translateY(${scroll * speed1}px)`;

    // let value = window.scrollY;

    // left.style.top = value * 0,5 + 'px';
})