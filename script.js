
/* vertical and horizontal iPhone */
const phoneVertical = document.getElementById('phone__vertical');
const screen1 = document.getElementById('screen-1');
const phoneHorizontal = document.getElementById('phone__horizontal');
const screen2 = document.getElementById('screen-2');

function clickAll(screen) {
        if(screen.style.display == 'block'){
            screen.style.display = 'none';
        } else {
            screen.style.display = 'block';
        }
}

screen1.addEventListener('click', function(){
    clickAll(screen1);
});
screen2.addEventListener('click', function(){
    clickAll(screen2);
});
phoneVertical.addEventListener('click', function(){
    clickAll(screen1);
});
phoneHorizontal.addEventListener('click', function(){
    clickAll(screen2);
});