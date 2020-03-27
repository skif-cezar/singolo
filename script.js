
/* header */

const menu = document.querySelector("nav ul");
const menuLinks = document.querySelectorAll("nav ul li a");

menuLinks.forEach( link => link.addEventListener("click", (event) => {
    menu.querySelectorAll('a').forEach(e => e.classList.remove('current'));
event.target.classList.add("current");
}));

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        document.getElementById(blockID).scrollTop += 10;
    })

};

document.addEventListener('scroll', onScroll);

function onScroll(){
    const pageHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
    const curPos = window.scrollY;
    const clientScreenHeight = document.documentElement.clientHeight;
    const clientBottomPosition = clientScreenHeight + curPos;

    document.querySelectorAll("#container > section").forEach((el) => {
        if(el.offsetTop - 89 <= curPos &&
        (el.offsetTop + el.offsetHeight - 89) > curPos){
            menuLinks.forEach((a) => {
                a.classList.remove("current");
        if(clientBottomPosition + 185 >= pageHeight) {
            menuLinks[menuLinks.length - 1].classList.add("current");
        } else {
            if (el.getAttribute("id") === a.getAttribute("href").substring(1)) {
                a.classList.add("current");
            }
        }
            })
        }
    })
}

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