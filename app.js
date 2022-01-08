const generateBtn = document.querySelector('.btn-generate')
const btnTrigger = document.querySelector('.btn')
const imgContainer = document.querySelector('.imgContainer')
const nav = document.querySelector('.navbar')
const navLogo = document.querySelector('nav-logo')
let body = document.body, html = document.documentElement;
let height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
let halfHeight = height / 2

window.addEventListener("scroll", () => {
    let scroll = this.scrollY;

    if (scroll >= 50) {
        nav.classList.add('navbar-active')

    } else {
        nav.classList.remove('navbar-active')
    }

    if(scroll >= halfHeight) {
        btnTrigger.classList.add('btn-show')

    } else {
        btnTrigger.classList.remove('btn-show')
    }
    
});

console.log(height)
console.log(halfHeight)


// SLICK
$(document).ready(function(){
    $('.cat-img-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.btn-generate').on('click', function() {
        fetch('https://api.thecatapi.com/v1/images/search')
        .then(res => res.json())
        .then(data => {
    
            let catUrl = data[0].url
    
            // imgContainer.setAttribute('src', `${catUrl}`)
            // console.log(data)
            $('.cat-img-slider').slick('slickAdd',`<div class="img-cat-container"><img class="imgContainer" src="${catUrl}"></div>`);
        })
        .catch(console.error())
        
    });
});