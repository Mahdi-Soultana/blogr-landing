const navCenter = document.querySelector( ".nav-center" );
const toggle = document.querySelector( ".close" );
const signUp = document.querySelector( ".signUp" );

toggle.addEventListener( "click", () => {
 
    navCenter.classList.toggle("active")
})
window.addEventListener( "scroll", () => {
    if ( window.scrollY > 200 ) {
        navCenter.classList.add( "scroll" );
        signUp.style.margin="0"
    } else {
        signUp.style.margin="2vw 3vw"
        navCenter.classList.remove("scroll")
 }
    navCenter.classList.remove("active")
})