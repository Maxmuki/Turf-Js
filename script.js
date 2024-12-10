window.onload = () => {
var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function(dets){
         crsr.style.left = dets.x + "px"
         crsr.style.top = dets.y + "px"
         blur.style.left = dets.x -250 +"px"
         blur.style.top = dets.y -250 + "px"
})

var button = document.querySelectorAll("#nav button")
button.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
    
})

// Handle dynamic events for buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        console.log(`${button.innerText} button clicked.`);
    });
});




gsap.to("#nav",{
    backgroundColor :"#000",
    height :"100px",
    duration :0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers: true
        start: "top -10%",
        end: "top -11%",
        scrub:1,
    },
});

// GSAP Animation for menu buttons (Hover effects)
gsap.fromTo("#nav button", 
    {
        scale: 1,
        opacity: 0.7
    },
    {
        scale: 1.1,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
            trigger: "#nav",
            start: "top top",
            end: "bottom bottom",
            scrub: 1
        }
    }
);











// Live Search Implementation
const searchBar = document.getElementById('search-bar');
const sections = document.querySelectorAll('#scroller h4');

searchBar.addEventListener('input', function() {
    const query = searchBar.value.toLowerCase();
    sections.forEach(section => {
        const text = section.textContent.toLowerCase();
        if (text.includes(query)) {
            section.style.display = 'inline-block';
        } else {
            section.style.display = 'none';
        }
    });
});



gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers: true,
        start: "top -20vh",
        end: "top -720vh",
        scrub:2,
    },
});

gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        start: "top 60%",
        end: "top 55%",
        scrub:2,
    },
});


gsap.fromTo(".card",{
    scale:0.8,
    opacity:0,
},
{   
    scale: 1,
    duration:1,
    opacity: 1,
    stagger:0.7,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        // markers: true,
        start:"top 80%",
        end:"top 60%",
        scrub:2,
    },
});







gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
       /* markers: true,*/
        start:"top 55%",
        end:"top 45%",
        scrub:4,
    },
});

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        /*markers: true,*/
        start:"top 55%",
        end:"top 45%",
        scrub:4,
    },
});

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
         trigger:"#page4 h1",
         scroller:"body",
        /*markers: true,*/
        start:"top 75%",
        end:"top 70%",
        scrub:4,
    },
});

};



document.getElementById('menu-toggle').addEventListener('click', () => {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('active');
});




