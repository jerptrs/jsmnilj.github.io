$(window).scroll(function() {
    parallax();
})

function parallax() {

    var wScroll = $(window).scrollTop();
    
    $('.parallax--bg').css('background-position', `center ${wScroll*0.75}px`)

    $('.parallax--box').css('top', `${-5 + (wScroll * 0.005)}em`)
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'});
    });
});
