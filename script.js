const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function init(){
    gsap.registerPlugin(ScrollTrigger);



const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },

  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

init()

/*var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
main.addEventListener("mousemove",function)*/

 var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        markers:true,
        start:"top 27%",
        end:"top 0",
        scrub: 3
    }
})

tl.to(".page1 h1",{
    x:-50,
},"anim")

tl.to(".page1 h2",{
    x:50
},"anim")

tl.to(".page1 video",{
    width:"120%"
},"anim")

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        markers:true,
        start:"top -100%",
        end:"top -120%",
        scrub: 3
    }
})
tl2.to(".main",{
    backgroundColor: "#fff"
})

var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        markers:true,
        start:"top -280%",
        end:"top -300%",
        scrub: 3
    }
})
tl3.to(".main",{
    backgroundColor:"#0F0D0D"
})



    var boxes = document.querySelectorAll(".box");

boxes.forEach(function(elem) {
    elem.addEventListener("mouseenter", function(event) {
        var att = elem.getAttribute("data-image");
        
        // Set the background image and its size
       
        event.target.style.backgroundImage = `url(${att})`;
        event.target.style.backgroundSize = "100px 100px"; // Fixed width and height
    });

    elem.addEventListener("mouseleave", function(event) {
        // Revert the background image and size to their original states (or other defaults)
        event.target.style.backgroundImage = "none"; // Replace with your default image if needed
        event.target.style.backgroundSize = "none";
       
    });
});


        


   




