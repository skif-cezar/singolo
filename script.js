
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

/* slider */

let items = document.querySelectorAll(".item");
let currentItem = 0;
let isEnabled = true;
let slider = document.getElementsByClassName("slider");

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function () {
        this.classList.remove('active', direction);
    });
}

function showItem(direction) {
    items[currentItem].classList.add('next', direction);
    items[currentItem].addEventListener('animationend', function () {
        this.classList.remove('next', direction);
        this.classList.add('active');
        isEnabled = true;
    });
}

function previousItem(n) {
    hideItem('to-right');
    changeCurrentItem(n - 1);
    showItem('from-left');
    if (slider[0].classList[1] == "blue") {
        slider[0].classList.remove('blue');
    }
    else { slider[0].classList.add('blue'); }
}

function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n + 1);
    showItem('from-right');
    if (slider[0].classList[1] == "blue") {
        slider[0].classList.remove('blue');
    }
    else { slider[0].classList.add('blue'); }
}

document.querySelector('.control.left').addEventListener('click', function () {
    if (isEnabled) {
        previousItem(currentItem);
    }
});

document.querySelector('.control.right').addEventListener('click', function () {
    if (isEnabled) {
        nextItem(currentItem);
    }
});

/* portfolio */

const tags = document.querySelectorAll(".container__buttons button");
const portfolio = document.querySelector(".portfolio__gallery");

tags.forEach(tag => tag.addEventListener("click", (event) => {
    if( !event.target.classList.contains("selected") ) {
    let portfolioPictures = [...portfolio.querySelectorAll(".area__img")];
    portfolioPictures.unshift(portfolioPictures.pop());
    portfolioPictures.forEach( pic => portfolio.append(pic) );
    console.log(portfolioPictures);
}
tags.forEach(t => t.classList.remove('selected'));
event.target.classList.add("selected");
}));

// frame around the picture
let switchNow = true;
const portfolioImg = portfolio.querySelectorAll(".area__img");
portfolioImg.forEach(image => image.addEventListener("click", (event) => {
    if ( event.target.classList.contains("frame") ) {
    switchNow = false;
}

portfolio.querySelectorAll("img").forEach(pic => pic.classList.remove("frame"));

if (switchNow) {
    event.target.classList.add("frame");
}

switchNow = true;
}));